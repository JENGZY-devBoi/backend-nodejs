import { Schema, model } from 'mongoose';
import { UserDto } from '../../../interfaces';

const userSchema = new Schema<UserDto>({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

export default model('User', userSchema);