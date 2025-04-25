import mongoose from 'mongoose';

// Se crea el esquema
const Schema = mongoose.Schema;
const mySchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('users', mySchema); // Recibe el nombre que le voy a dar a la colección y luego recibe el esquema

export default User;


