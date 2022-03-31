import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bms3:94708961@alura-nodejs-express.emque.mongodb.net/alura-node-express");

let db = mongoose.connection;

export default db;

