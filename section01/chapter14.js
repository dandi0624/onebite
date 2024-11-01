// 스코프(Scope) : 우리말로 "범위", 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함

/*
    function funcA(){
        let a = 1; // 변수 a 접근 가능 영역(스코프 , 지역 스코프)
    }
    
    console.log(a)
    -> 변수 a 접근 불가능 영역, 오류
*/

// 스포크
// -> 전역(전체 영역) 스포프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능, 블록 ({}) 내에서 선언된 변수들

let a = 1; // 전역 스코프

function funcA() {
  let b = 3; // 지역 스코프
  console.log(a);

  function funcB() {} // 지역 스코프 가짐
}

funcA();
//console.log(b); // 오류

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}

//예외) 함수 선언식은 함수 선억식 내에서만 지역 스코프를 가진다 나머지는 지역 스코프 가지지 않음
