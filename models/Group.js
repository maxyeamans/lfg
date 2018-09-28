const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupName: { type: String },
  rank: { type: String },
  time: { type: String, required: true, },
  player1: { type: String, required: true },
  p1State: { type: number, default: 0 },
  p1Role: { type: String, required: true },
  player2: { type: String, default: "Player 2"},
  p2State: { type: number, default: 0 },
  p2Role: { type: String, required: true },
  player3: { type: String, default: "Player 3" },
  p3State: { type: number, default: 0 },
  p3Role: { type: String, required: true },
  player4: { type: String, default: "Player 4" },
  p4State: { type: number, default: 0 },
  p4Role: { type: String, required: true },
  player5: { type: String, default: "Player 5" },
  p5State: { type: number, default: 0 },
  p5Role: { type: String, required: true },
  player6: { type: String, default: "Player 6" },
  p6State: { type: number, default: 0 },
  p6Role: { type: String, required: true },
  
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
