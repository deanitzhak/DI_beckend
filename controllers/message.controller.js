const MessageRepository = require('../repo/message.repo');
const messageModel = require('../models/message.model');
const messageRepo = new MessageRepository(messageModel);
module.exports = {
    submitNewMessage: async (req, res) => { // Make sure the function name matches here
        try {
            const data = req.body;
            const newMessage = newMessageCreate(data);
            const result = await messageRepo.saveNewMessage(newMessage);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};
function newMessageCreate(data) {
    const message = new messageModel({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
    });
    return message;
}