const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>
{
  if (err)
  {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.');

  db.collection('Users').deleteMany({name: 'Andy de Torres'}).then((result) =>
  {
    console.log(result);
  });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>
  // {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59a0a6157f6a2e5b5b1d2f7d')}).then((result) =>
  {
    console.log(result);
  });

  // db.close();
});
