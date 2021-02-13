import mongoose from 'mongoose';
import UserSchema from './userModel';

const Schema = mongoose.Schema;

export const DriverSchema = new Schema({
    employeeId: {
        type: Number,
        require: true
    }
})