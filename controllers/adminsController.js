//middleware
import Admin from '../models/admins.model.js'


const createAdmin = function (req, res) {
  // create a new instance of Admin and call it's function addAdmin
  let admin = new Admin(req.body)
  admin.addAdmin()
    .then((mongoRes) => {
      res.status(201);
      res.json(mongoRes);
    }).catch((err) => {
      res.status(500);
      res.json(err);
    })
}

const login = function (req, res) {
  let admin = new Admin(req.body)
  admin.login()
    .then(function (result) {
      console.log(result)
      res.send('yay')
    }).catch((err) => {
      res.status(500);
      res.json(err)
    })
}

const adminController = { createAdmin, login }

export default adminController;


