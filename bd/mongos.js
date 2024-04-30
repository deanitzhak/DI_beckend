const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Path = require("path");

module.exports = class MongoStorage {
    constructor(Model) {
        this.Model = Model;
    }
    connect() {
        const connectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.gfymber.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
        return new Promise((resolve, reject) => {
            mongoose.connect(connectionUrl)
                .then(() => {
                    console.log("connected");
                    resolve(); 
                })
                .catch((err) => {
                    reject(err); 
                });
        });
    }
    create(data) {
        return data.save();
    }
}
