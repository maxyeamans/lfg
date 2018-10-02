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
    profile: []
  },
  {
    username: "test2",
    password: "password2",
    profile: []
  },
  {
    username: "test3",
    password: "password3",
    profile: []
  },
  {
    username: "test4",
    password: "password4",
    profile: []
  },
  {
    username: "test5",
    password: "password5",
    profile: []
  },
  {
    username: "test6",
    password: "password6",
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

