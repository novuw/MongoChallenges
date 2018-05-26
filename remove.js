
var MongoClient = require('mongodb').MongoClient;
var dbName = process.argv[2];
var collName = process.argv[3];
var id = process.argv[4];
var url = 'mongodb://localhost:27017/${dbName}';
MongoClient.connect(url, function(err, client){
    if (err) throw err;
    var Db = client.db(dbName);
    Db.collection(collName).deleteOne({ _id: id});
     client.close();

});
