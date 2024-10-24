// 함수

// 함수선언 => function 함수명(){}
// => 함수 호출 시 실행될 내용을 미리 정의하는 일
function greetion() {
  console.log("ddd");
}

console.log("호출 전");
// 함수 호출시에는 함수명();
greetion();
console.log("호출 후");

// 호이스팅
// -> 끌어올리다 라는 뜻
// 선언문은 호출문보다 아래에 있어도 문제가 없음

// 넓이 구하기
function getArea(width, height) {
  // width, height는 매개변수
  function another() {
    // 중첩 함수
    console.log("another");
  }
  let area = width * height;

  return area; // 반환값
}
let area1 = getArea(10, 20); // 10, 20으 이수
let area2 = getArea(120, 300);

console.log(area2);
