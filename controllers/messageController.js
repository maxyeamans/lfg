const db = require("../models");

// Defining methods for the groupController
module.exports = {
  findAll: function(req, res) {
    db.Message
      .find(req.query)
      .sort({ date: -1 })
      .limit(25)
      .then(dbModel => {
        // console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findByData: function(req, res) {
    db.Message
      .find( req.query )
      .then( messages => res.json(messages) )
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Message
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    console.log("this is req.body inside message controller");

    db.Message
      .create(req.body)
      .then(dbModel => {
        // console.log("this is dbModel after db.Group.create: ", dbModels)
        res.json(dbModel)
      })
      .catch(err => {
        console.log("we are inside of .catch and our error is: ", err);
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    console.log("update message controller");
    console.log(req.params);
    console.log(req.body);
    db.Message
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Message
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
