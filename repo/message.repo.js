// message.repo.js

const MongoStorage = require('../bd/mongos');

class MessageRepository extends MongoStorage {
    constructor(mod) {
        super(mod); 
        this.Model = mod;
        this.saveNewMessage = this.saveNewMessage.bind(this);
    }
    
    async saveNewMessage(data) {
        const newMessage = new this.Model(data);
        return this.create(newMessage);
    }
}

module.exports = MessageRepository;
