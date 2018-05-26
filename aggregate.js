var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

MongoClient.connect(url, {useNewUrlParser: true}, function(err, client){
    if (err) throw err;
    var db = client.db('learnyoumongo');
    var size = process.argv[2];
    //below function used to find all of the arrays that have price function
   /* db.collection('prices').find({price :
    {$ne : null}
        }).toArray(function(err, documents){
        if (err) throw err;
        console.log(documents);
    });*/

    //below stuff used to avg their prices
    var match = {$match: {size: size}};
    var group = {$group: {_id: 'total',
        total: {
            $avg: '$price'
        }
    }};
    db.collection('prices').aggregate([
        match,
        group]).toArray(function(err, results){
            if (err) throw err;
            var value = results[0].total;
            console.log(value.toFixed(2));
        });
    client.close();
});
