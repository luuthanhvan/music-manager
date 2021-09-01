let request = require('supertest');
const app = require("../app");
const Song = require('../models/Song');

describe('Testing song', function() {
    before(function(done){
        const song = new Song({
            name: "WHISTLE",
            genre: "KPOP",
            singer: "BLACKPINK",
            link: "/files/Whistle.mp3",
        })
        
        song.save().then(() => {
           done();
        })
    });

    // Test the POST route
    describe('Creating a song', function() {
        it('Should create Song successfully', function(done) {
            const song = {
                name: "AS IF IT'S YOUR LAST",
                genre: "KPOP",
                singer: "BLACKPINK",
                link: "/files/AsIfItsYourLast.mp3",
            };

            request(app)
                .post('/song')
                .send(song)
                .expect(201)
                .end((err, res) => {
                    if(err){
                        return done(err);
                    }
                    return done();
                })
        });
    });

    // Test the GET route
    describe('Reading all songs', function(){
        it('Should read all Songs successfully', function(done){
            request(app)
                .get('/songs')
                .expect(200)
                .end((err, res) => {
                    if(err){
                        return done(err);
                    }
                    return done();
                })

        })
    })
    
    // Test the GET (by id) route : 612f3d08fb31f4675891cda7
    describe('Reading a song', function(){
        it('Should read a song successfully', function(done){
            request(app)
                .get('/song/612f3def1e312abc9a8441ea')
                .expect(200)
                .end((err, res) => {
                    if(err){
                        return done(err);
                    }
                    return done();
                })
        })
    })

    // Test the PUT route

    // Test the DELETE route
});