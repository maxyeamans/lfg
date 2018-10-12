const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  group: [{ type: Schema.Types.ObjectId, ref: 'Group' }]
  
});

// Instance method to compare a password input with the password hash
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// This hook salts the user's password before the 
userSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  next();
});

// userSchema.pre("findOneAndUpdate", function(next) {
//   this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
//   next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
