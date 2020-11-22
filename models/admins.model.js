import db from '../db.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import md5 from 'md5'

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

    // only if username is valid, then check to see if it's already taken
    if (this.data.username.length > 2 && this.data.username.length < 31 && validator.isAlphanumeric(this.data.username)) {
      let usernameExists = await db.db().collection('admins').findOne({ username: this.data.username })
      if (usernameExists) { this.errors.push("That username is already taken") }
    }

    // only if email is valid, then check to see if it's already taken
    if (validator.isEmail(this.data.email)) {
      let emailExists = await db.db().collection('admins').findOne({ email: this.data.email })
      if (emailExists) { this.errors.push("That email is already being used") }
    }
    resolve()
  })
}

Admin.prototype.addAdmin = function () {
  return new Promise(async (resolve, reject) => {
    // Step #1: clean up & validate user data
    this.cleanUp()
    await this.validate()
    // Step #2: Only if there are no validation errors
    // then add the admin data into a database
    if (!this.errors.length) {
      let salt = bcrypt.genSaltSync(10)
      this.data.password = bcrypt.hashSync(this.data.password, salt)
      const insertRes = await db.db().collection('admins').insertOne(this.data);
      resolve()
    }
    else {
      reject(this.errors)
    }
  })
}

Admin.prototype.login = function () {
  //used an arrow function because "this" will tie to the Promise() rather than tieing to the global function
  return new Promise(async (resolve, reject) => {
    // call cleanUp() to make sure were sending the properties in a string
    this.cleanUp()
    // if user, go into the db, find the username that matches the user input (this.data.username)
    const mongoRes = await db.db().collection('admins').findOne({ username: this.data.username })
      .then((admin) => {
        // if this is an admin, && user's input password matches the hashed password, send 'congrats' result
        if (admin && bcrypt.compareSync(this.data.password, admin.password)) {
          this.data = admin
          resolve('congrats')
        }
        // else, send 'Invalid username/password' err
        else {
          reject('Invalid username/password')
        }
      })
      .catch(() => {
        // this is an error on our side as a developer
        reject('Please try again later')
      })
  })
}

// Admin.prototype.login = function (admin) {
//   return new Promise(async (resolve, reject) => {
//     this.cleanUp()
//     if (!this.errors.length) {
//       const insertRes = await db.db().collection('admins').findOne({ username: this.data.username })
//         .then((admin) => {
//           if (admin && this.data.password === admin.password) {
//             this.data = admin
//             resolve()
//           } else {
//             reject('Invaild username and password')
//           }
//         })
//         .catch(() => {
//           reject('Developer Error')
//         })
//     }
//   })
// }



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
