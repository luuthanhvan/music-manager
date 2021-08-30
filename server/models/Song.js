const mg = require('mongoose');
const Schema = mg.Schema;

const Songs = new Schema({
    name: { type: String, require: true },
    genre: { type: String, require: true },
    singer: { type: String, require: true },
    link: { type: String, require: true },
});

module.exports = mg.model("Songs", Songs);