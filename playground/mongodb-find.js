const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>
{
  if (err)
  {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.');

  db.collection('Users').find({name: 'Andy de Torres'}).count().then((count) =>
  {
    console.log(`Users count: ${count}`);
  },
 (err) =>
  {
    console.log('Unable to fetch users', err);
  });

  db.collection('Users').find({name: 'Andy de Torres'}).toArray().then((docs) =>
  {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  },
 (err) =>
  {
    console.log('Unable to fetch users', err);
  });


  db.close();
});
