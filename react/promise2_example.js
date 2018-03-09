const fs = require('fs');

(async function () {
  const a = await read('test2.txt');
  console.log(a);
  
  const b = await read('test2.txt');
  console.log(b);
  
  const c = await read('test2.txt');
  console.log(c);
})();

function read (filename) {
  return new Promise((resolve) => {
    fs.readFile(filename, (error, data) => {
      resolve(data.toString());
    });
  });
}