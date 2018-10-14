const db = require("../models");

// Defining methods for the groupController
module.exports = {
  findAll: function(req, res) {
    db.Group
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        // console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findByData: function(req, res) {
    db.Group
      .find( req.query )
      .then( groups => res.json(groups) )
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Group
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {

    

    console.log(req.body.groupName)
    console.log("this is req.body inside controller", req.body)

    db.Group
      .create(req.body)
      .then(dbModel => {
        console.log("this is dbModel after db.Group.create: ", dbModels)
        res.json(dbModel)
      })
      .catch(err => {
        console.log("we are inside of .catch and our error is: ", err);
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    db.Group
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Group
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
