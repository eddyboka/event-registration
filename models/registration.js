import { Schema, model } from "mongoose";

const eventDb = new Schema({
    name:{type: String, required: true, unique: true},
    location:{type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true}

}, {timestamps:true})

export const registrationModel = model("Registration", eventDb) ;