import db from '../db.js'

// const adminsCollection = db.db().collection('admins')

let Admin = function (data) {
  this.data = data
}

Admin.prototype.addAdmin = function (data) {
  return new Promise(async (resolve, reject) => {
    try {
      const insertRes = await db.db().collection('admins').insertOne(data);
      return insertRes;
      resolve()
    } catch (error) {
      console.error(error);
      reject()
    }
  })
};


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
