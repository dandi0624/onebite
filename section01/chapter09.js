// 조건문 : 특정조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// 대표적으로 if, switch

// 1. if 조건문 (if문, if-else문, if-else if문)
let num = 10;

if (num >= 10) {
  console.log("num은 10이상입니다.");
  console.log("조건이 참 입니다.");
} else if (num >= 5) {
} else {
  console.log("조건이 거짓 입니다.");
}

// 2. Switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("개");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  default: {
    console.log("그런 동물은 없어요.");
  }
}
