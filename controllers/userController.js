const User = require("./../models/User");
const bcrypt = require("bcrypt");
// import API from "./../client/src/utils/API";


// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body + " req.body");
    newUser = new User( req.body );
    newUser
      .save()
      .then( savedUser => {
        res.json(savedUser);
        console.log(savedUser._id);
      })
      .catch( err => res.status(422).json(err) )
    
    // User
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("update user controller");
    console.log(req.params);
    // console.log(req.body);
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    console.log(req.body);
    User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Request args should be username and password
  login: function(req, res) {
    User
      .findOne({ username: req.body.username })
      .then( foundUser => {
        if( foundUser.comparePassword(req.body.password) ) {
          console.log(foundUser._id + "usercontroller id");
          // User
          // .findById({ _id: foundUser._id })
          // .then(dbModel => res.json(dbModel))
          // .catch(err => res.status(422).json(err));
          res.json(foundUser);
          console.log(foundUser);
          
        }
        else {
          res.json({
            error: "Passwords don't match"
          })
        };
      })
      .catch( err => res.status(422).json(err) );
  },
  loginId: function(req, res) {
    User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
