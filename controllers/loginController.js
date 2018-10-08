const User = require("./../models/User");
var login;

module.exports = {
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
          login = foundUser._id;
          // return login;
          return login;

                    
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
    console.log(login + " loginId");
    User
      .findById(login)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};