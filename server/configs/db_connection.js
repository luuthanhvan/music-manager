const mg = require('mongoose');
const url = 'mongodb://localhost:27017/music_manager';

async function connect(){
    try {
        await mg.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database sucessfully connected');
    } catch(err){
        console.log('Database failure connected');
    }
}

module.exports = { connect };
