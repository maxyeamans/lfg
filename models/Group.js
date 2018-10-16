const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupName: { type: String, unique: true },
  platform: { type: String, required: true },
  groupRank: { type: String },
  time: { type: String, required: true },
  playerCount: { type: Number, default: 1},
  player1: {
    gamertag: { type: String, required: true },
    role: { type: String, required: true },
    state: { type: Number, default: 0 },
    rank: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  player2: {
    gamertag: { type: String, default: "Player 2" },
    role: { type: String },
    state: { type: Number, default: 0 },
    rank: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  player3: {
    gamertag: { type: String, default: "Player 3" },
    role: { type: String },
    state: { type: Number, default: 0 },
    rank: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  player4: {
    gamertag: { type: String, default: "Player 4" },
    role: { type: String },
    state: { type: Number, default: 0 },
    rank: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  player5: {
    gamertag: { type: String, default: "Player 5" },
    role: { type: String },
    state: { type: Number, default: 0 },
    rank: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  player6: {
    gamertag: { type: String, default: "Player 6" },
    role: { type: String },
    state: { type: Number, default: 0 },
    rank: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  }
});

// This is a post-update hook that will reset the player count of the group.
// The player count will eventually be used to make sure full groups don't display on the group search page.
groupSchema.post("update", function(next) {
  const playerArray = [this.player1, this.player2, this.player3, this.player4, this.player5, this.player6];
  const count = playerArray.filter( player => player.state !== 0).length;
  this.count = count;
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
