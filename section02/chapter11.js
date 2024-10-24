// 동기 -> 여러개의 작업을 순서대로, 하나씩 처리하는 방식
// 비동기 -> 동기적이지 않다, 작업을 순서대로 처리하지 않음

console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
