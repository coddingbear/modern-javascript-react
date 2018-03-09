function * reverse(array) {
  for(let i = array.length -1; i >= 0; i--) {
    yield array[i];
  }
}

function * filter(array, condition) {
  for(const value of array)
    if(condition(value))
      yield value;
}

a = [1, 2, 3, 4, 5];
// for(const value of a.reverse()) {
//   console.log(value);
// }
console.log('리버스 함수 사용..');
for(const value of reverse(a)) {
  console.log(value);
}
console.log('필터 함수 사용..');
for(const value of filter(a, x => x > 2)) {
  console.log(value);
}