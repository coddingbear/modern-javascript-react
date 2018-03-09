const fs = require('fs');

// new Promise((resolve) => {
//   fs.readFile('test2.txt', (error, data) => {
//     resolve(data.toString());
//   });
// }).then((value)=>{
//   console.log(value);
// });

read('test2.txt').then((value) => {
  console.log(value);
});

function read (filename) {
  return new Promise((resolve) => {
    fs.readFile(filename, (error, data) => {
      resolve(data.toString());
    });
  });
}