const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupName: { type: String },
  groupRank: { type: String },
  time: { type: String, required: true },
  player1: {
    gamertag: {type: String, required: true},
    role: { type: String, required: true },
    state: { type: Number, default: 0 },
    rank: { type: String },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  player2: {
    gamertag: { type: String, required: true, default: "Player 2" },
    role: { type: String, required: true },
    state: { type: Number, default: 0 },
    rank: { type: String },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  player3: {
    gamertag: {type: String, required: true, default: "Player 3"},
    role: { type: String, required: true },
    state: { type: Number, default: 0 },
    rank: { type: String },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  player4: {
    gamertag: {type: String, required: true, default: "Player 4" },
    role: { type: String, required: true },
    state: { type: Number, default: 0 },
    rank: { type: String },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  player5: {
    gamertag: {type: String, required: true, default: "Player 5" },
    role: { type: String, required: true },
    state: { type: Number, default: 0 },
    rank: { type: String },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  player6: {
    gamertag: {type: String, required: true, default: "Player 6" },
    role: { type: String, required: true },
    state: { type: Number, default: 0 },
    rank: { type: String },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
  }
  
  
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
