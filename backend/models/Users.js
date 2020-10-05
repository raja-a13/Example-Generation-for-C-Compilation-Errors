const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
      type: String,
      required: true,
      max: 255,
      min: 6
}  ,
  lastname: {
    type: String,
    required: true,
    min: 6
}  ,
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
}  ,
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
}  ,
  phone: {
    type: String,
    required: true,
    min: 6
}  ,
  date: {
    type: Date,
    default: Date.now
}  ,
passwordConfirm: {
    type: String,
    required: true,
    min: 6
} 
});

UserSchema.set('toJSON', {virtuals:true});

module.exports = mongoose.model('Users', UserSchema);

