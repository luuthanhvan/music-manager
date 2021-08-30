exports.mutipleMongooseToObject = function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
}

exports.mongooseToObject =  function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}