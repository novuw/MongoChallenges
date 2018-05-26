var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var stockage = process.argv[2];
mongo.connect(url, function(err,client){
    if (err) throw err;
    var db = client.db('learnyoumongo');//thank you redshift https://stackoverflow.com/questions/48008767/db-collection-is-not-a-function-what
    db.collection('parrots').find({age :
    {$gt : +stockage}
        }).toArray(function(err, documents){
        if (err) throw err;
        console.log(documents);
    });
    client.close();
});
