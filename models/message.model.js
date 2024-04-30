const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
    id:  ObjectId,
    name: String,
    email: String,
    subject: String,
    message: String,
}, {
    collection: "Message",
});

const messageModel = model("Message", messageSchema);
module.exports = messageModel;
