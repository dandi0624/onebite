// 배열(Array) : 여러개의 값을 "순차적"으로 담을 수 있는 자료형

// 1. 배열 생성
// 방법 1 : 배열생성자
let arrA = new Array();

// 방법 2 : 배열 리터럴 (대부분 사용)
let arrb = [];

let arrc = [1, 2, 3];

let arrC = [1, 2, 3, ture, "hello", null, undefined, () => {}, {}, []];

console.log(arrC);

// 2. 배열 요소 접근 (인텍스로 접근)
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";
