var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var doc = {
        'firstName': process.argv[2],
        'lastName': process.argv[3]};
MongoClient.connect(url, function(err, client){
    if (err) throw err;
    var db = client.db('learnyoumongo');
    db.collection('docs').insert(doc, function(err, data){
        if (err) throw err;
        console.log(JSON.stringify(doc));
        client.close();
    });
//thanks to https://github.com/evanlucas/learnyoumongo/issues/40 for helping, I was logging wrong object
});
