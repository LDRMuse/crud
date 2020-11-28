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
      // add a session once admin is logged in and add username property
      req.session.admin = { username: admin.data.username }
      // use save to save credentials
      req.session.save(() => {
        console.log(result)
        res.send('yay')
      })
    }).catch((err) => {
      res.status(500);
      res.json(err)
    })
}

const logout = function (req, res) {
  req.session.destroy(function() {
    console.log('User is logged out')
    res.send('woo!!')
  })
}

const adminController = { createAdmin, login, logout }

export default adminController;


