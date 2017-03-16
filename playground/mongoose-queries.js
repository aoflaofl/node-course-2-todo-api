const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');

const {
  User
} = require('./../server/models/user');

// var id = '58c9fbb6f9d2961734dd1e0511';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
//   ''
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));
var id = '58c7093896f4f0135010d3a3';
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found.');
  }
  console.log('User found', user);
}).catch((e) => console.log(e));
