// 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수
/*
function main(value) {
  value();
}

function sub() {
  console.log("sub");
}

main(sub); // 여기서 sub는 콜백함수
*/
//-----------------------------------------------

// 1. 콜백함수
/*
function main(value) {
  console.log(1);
  console.log(2);
  console.log(value);
  value();
}

/*
function sub() {
  console.log("i am sub");
}

main(sub);
*/

// 1. 콜백함수
/*
function main(value) {
  console.log(value);
}


function sub() {
  console.log("i am sub");
}

main(sub); // sub함수 자체가 호출됨
*/

function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

/* 표현식1
function sub() {
  console.log("i am sub");
}

main(sub); // i am sub 가 출력됨
*/
// 이런식으로 단축
/*
main(function sub(){
  console.log("i am sub");
})
*/
// 더 단축
main(() => {
  console.log("i am sub");
});

//2. 콜백 함수의 활용
/*
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

repeat(5);
*/
// 중복코드
/*
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
}
*/

// 중복코드를 방지하고 개선한 방법
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
