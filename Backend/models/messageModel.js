import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

export const Message = mongoose.model('Message', messageSchema);
