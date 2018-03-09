// 제너레이터 함수
function * counter() {
  // 시작 부분 부터 읽는 녀석
  yield 1; // <-
  yield 2;
  yield 3;
 // return 1; 제너레이터 함수에서 거의 사용되지 않음
}
generatorObject = counter();
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

for(const value of generatorObject) {
  console.log(value);
}