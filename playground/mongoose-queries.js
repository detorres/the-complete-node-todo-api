const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '59a1aae35715c1451260248911';
//
// if (!ObjectID.isValid(id))
// {
//   console.log("ID not valid");
// }
//
// Todo.find({ _id: id })
//   .then((todos) =>
//   {
//     console.log('Todos:', todos);
//   });
//
// Todo.findOne({ _id: id })
//   .then((todo) =>
//   {
//     console.log('Todo:', todo);
//   });
//
// Todo.findById(id)
// .then((todo) =>
// {
//   if (!todo)
//   {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID:', todo);
// })
// .catch((err) => console.log(err));

var id = '59a17f3758c6180bd9646544';

User.findById(id)
  .then((user) =>
  {
    if (!user) return console.log('ID not found');

    console.log('User by ID:', user);
  })
  .catch((err) => console.log(err));
