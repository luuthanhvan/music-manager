const songRouter = require('./song');

function route(app){
    app.use('/', songRouter);
}

module.exports = route;