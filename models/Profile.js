const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  gamertag: { type: String, required: true, unique: true },
  platform: { type: String, required: true },
  role: { type: String, required: true },
  group: [{ type: Schema.Types.ObjectId, ref: 'Group' }]
  
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
