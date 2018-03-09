const fs = require('fs');

// fs.writeFileSync('text.txt', 'Hello JavaScript');
// const content = fs.readFileSync('text.txt').toString();
// console.log(content);

// 익명함수 이용 비동기 처리
// fs.writeFile('test2.txt', 'Modern JavaScript', function(error) {
//     fs.readFile('test2.txt', function(error, data) {
//       console.log(data.toString());
//     });
// });

// 애로우 함수 사용
console.log('point a');
fs.writeFile('test2.txt', 'Modern JavaScript', (error) => {
  console.log('point b');
  fs.readFile('test2.txt', (error, data) => {
    console.log('point c');
    console.log(data.toString());
  });
  console.log('point d');
});
console.log('point e');