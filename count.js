var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var sage = process.argv[2];


MongoClient.connect(url, {useNewUrlParser: true}, function(err, client){
    if (err) throw err;
    var db = client.db('learnyoumongo');
    db.collection('parrots').count(
        {age:
        {$gt: +sage}
        }, function(err, count){
            if (err) throw err;
            console.log(count);
            client.close();
        }
    );
});
