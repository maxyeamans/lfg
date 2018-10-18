const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  gamertag: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  message: { type: String, required: true },
  groupId: { type: Schema.Types.ObjectId, ref: 'Group' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
  
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
