const Song = require('../models/Song');
const httpResponse = require('../services/HttpResponse');
const { mutipleMongooseToObject, mongooseToObject } = require('../services/Mongoose');
const baseUrl = "http://localhost:5000";

class SongController{
    
    async store(req, res){
        try{
            const pathToFile = `/files/${req.file.filename}`,
                data = req.body;

            const song = new Song({
                name: data.name,
                genre: data.genre,
                singer: data.singer,
                link: pathToFile,
            });

            await song.save();
            return httpResponse.successResponse(res, 201, "The song successfully created!");
        }
        catch(error){
            return httpResponse.errorResponse(res, error);
        }
    }

    async getAll(req, res){
        try{
            let songs = await Song.find({});
            songs.forEach(song => {
               song.link = baseUrl + song.link;
            });

            return httpResponse.successResponseWithData(res, 200, 'The songs successfully fetched', { songs: mutipleMongooseToObject(songs)});
        }
        catch(error){
            return httpResponse.errorResponse(res, error);
        }
    }

    async get(req, res){
        try{
            const songId = req.params.id;
            let song = await Song.findById(songId);
            song.link = baseUrl + song.link;
            return httpResponse.successResponseWithData(res, 200, 'The songs successfully fetched', { song: mongooseToObject(song)})
        }
        catch(error){
            return httpResponse.errorResponse(res, error);
        }
    }

    async update(req, res){
        try{
            const newSong = req.body;
            const songId = req.params.id;
            await Song.findByIdAndUpdate({_id: songId}, newSong, {new: true});
            return httpResponse.successResponse(res, 200, "The song successfully updated!");
        }
        catch(error){
            return httpResponse.errorResponse(res, error);
        }
    }

    async remove(req, res){
        try{
            const songId = req.params.id;
            await Song.deleteOne({_id: songId});
            return httpResponse.successResponse(res, 200, "The song successfully deleted!");
        }
        catch(error){
            return httpResponse.errorResponse(res, error);
        }
    }
}

module.exports = new SongController();