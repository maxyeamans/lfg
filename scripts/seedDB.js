const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collections and inserts the sample data below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/lfgtest"
);

const usersSeed = [
  {
    username: "test1",
    password: "password1",
    email: "email1@email.com",
    profile: []
  },
  {
    username: "test2",
    password: "password2",
    email: "email2@email.com",
    profile: []
  },
  {
    username: "test3",
    password: "password3",
    email: "email3@email.com",
    profile: []
  },
  {
    username: "test4",
    password: "password4",
    email: "email4@email.com",
    profile: []
  },
  {
    username: "test5",
    password: "password5",
    email: "email5@email.com",
    profile: []
  },
  {
    username: "test6",
    password: "password6",
    email: "email6@email.com",
    profile: []
  },
  
];

db.User
  .remove({})
  .then(() => db.User.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  /////////////////////////////////////////////////////////////////


  // const profilesSeed = [
  //   {
  //     gamertag: "tag1",
  //     platform: "pc",
  //     role: "tank",
  //     group: []
  //   },
  //   {
  //     gamertag: "tag1",
  //     platform: "pc",
  //     role: "tank",
  //     group: []
  //   },
  //   {
  //     gamertag: "tag1",
  //     platform: "pc",
  //     role: "tank",
  //     group: []
  //   },
  //   {
  //     gamertag: "tag1",
  //     platform: "pc",
  //     role: "tank",
  //     group: []
  //   },
  //   {
  //     gamertag: "tag1",
  //     platform: "pc",
  //     role: "tank",
  //     group: []
  //   },
  //   {
  //     gamertag: "tag1",
  //     platform: "pc",
  //     role: "tank",
  //     group: []
  //   },

  // ];

