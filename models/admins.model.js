import db from '../db.js'
import validator from 'validator'

let Admin = function (data) {
  this.data = data
  this.errors = []
}

Admin.prototype.cleanUp = function () {
  if (typeof (this.data.username) != "string") { this.data.username = "" }
  if (typeof (this.data.email) != "string") { this.data.email = "" }
  if (typeof (this.data.password) != "string") { this.data.password = "" }

  // get rid of any bogus properties
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password
  }
}


Admin.prototype.validate = function () {
  return new Promise(async (resolve, reject) => {
    if (this.data.username == "") { this.errors.push("You must provide a username.") }
    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) { this.errors.push("Username can only contain letters and numbers.") }
    if (!validator.isEmail(this.data.email)) { this.errors.push("You must provide a valid email address.") }
    if (this.data.password == "") { this.errors.push("You must provide a password.") }
    if (this.data.password.length > 0 && this.data.password.length < 12) { this.errors.push("Password must be at least 12 characters.") }
    if (this.data.password.length > 50) { this.errors.push("Password cannot exceed 50 characters.") }
    if (this.data.username.length > 0 && this.data.username.length < 3) { this.errors.push("Username must be at least 3 characters.") }
    if (this.data.username.length > 30) { this.errors.push("Username cannot exceed 30 characters.") }
    resolve()
  })
}

Admin.prototype.addAdmin = function (admin) {
  return new Promise(async (resolve, reject) => {
    // Step #1: clean up & validate user data
    this.cleanUp()
    await this.validate()
    // Step #2: Only if there are no validation errors
    // then add the admin data into a database
    if (!this.errors.length) {
      const insertRes = await db.db().collection('admins').insertOne(admin);
      resolve()
    }
    else {
      reject(this.errors)
    }
  })
}

// Admin.prototype.addAdmin = function (admin) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const insertRes = await db.db().collection('admins').insertOne(admin);
//       return insertRes;
//       resolve()
//     } catch (error) {
//       console.error(error);
//       reject()
//     }
//   })
// };



// export const getAdmin = async (uid) => {
//   try {
//     return await db.db('crud').collection('admins').findOne(uid);
//   } catch (err) {
//     throw new Error(err);
//   }
// };


// export const deleteAdmin = async () => {
//   try {
//     const deleteRes = await client.db('crud').collection('admins').remove();
//     return deleteRes;
//   } catch (error) {
//     console.error(error);
//   }
// };

export default Admin
