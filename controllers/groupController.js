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
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
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
    console.log("update group controller");
    console.log(req.params);
    console.log(req.body);
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
  },
  /*
  * To join a group, we have to look up the group by id, find out if the group has any open player spots,
  * then update the first open player spot to include the current user's objectID and set the state to 1.
  */
  join: function(req, res) {
    const groupPlayers =  ["player2", "player3", "player4", "player5", "player6"];
    
    db.Group
      // Find group based on the id in the request body
      .findById({ _id: req.params.id})
      // Use the groupPlayers[] above to filter over the group and return open player spots
      .then( group => groupPlayers.filter( player => group[player].state === 0) )
      // Do a check of the number of open players, and send back the first open slot
      .then( openPlayers => console.log("Open player slots", openPlayers) && openPlayers.length === 0 ? res.json({error: "Error"}) : openPlayers[0] )
      // Add the user to the open player spot and 
      // .then( openPlayer => db.Group.findOneAndUpdate({ _id: req.body.id }, { [openPlayer]: { state: 1, user: req.body.user} }))
      .then( openPlayer => db.Group.findOneAndUpdate({ _id: req.body.id }, { [openPlayer]: { state: 1, user: req.body.user} }, {new: true}))
      .then( dbModel => res.json(dbModel))
      // .then( openPlayer => res.json({openPlayer: openPlayer}))
      .catch( err => res.status(422).json(err));
  }
};
