//const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient, ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  db.collection('Users').deleteMany({
    name: 'Gene'
  }).then((result) => {
    console.log(result);
  });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58bf56d03d77e516f8dc1408')
  }).then((result) => {
    console.log(result);
  });


  //db.close();
});
