import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const mySchema = new Schema({
    name: String,
    email: String,
});

const User = mongoose.model('users', mySchema);


