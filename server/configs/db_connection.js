const mg = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});

let url = 'mongodb://localhost:27017/music_manager';

if(process.env.NODE_ENV === 'test')
    url = 'mongodb://localhost:27017/music_manager_test';

async function connect(){
    try {
        console.log(url);
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
