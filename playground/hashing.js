const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var data = {
  id: 10
};

var password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) =>
// {
//   bcrypt.hash(password, salt, (err, hash) =>
//   {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$mn.TS4H11jdMJcjFexZg8O.cPUvIsRIfVeLBaJTQeGCpq.VrEwKTW';

bcrypt.compare(password, hashedPassword, (err, res) =>
{
  console.log(res);
});
