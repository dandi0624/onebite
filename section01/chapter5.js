// 형 변환(Type Castion) : 어떤 값의 타입을 다른 타입으로 변경함
// 묵시적 형 변환 (암묵적 형 변환) : 개발자가 직접 설정하시 않아도 알아서 자바스크립트 엔진이 형변환 하는 것을 말함
// 명시적 형 변환 : 개발자가 직접 형 변환 함

// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것
// 하나의 변수만 수정하면 오류가 나지 않을 경우에만

let num = 10;
let str = "20";

// 자동으로 numberType 에서 String Type으로 변환
const result = num + str;
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래며 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1);

let str2 = "10개";
let strToNum2 = parseeInt(str2);
// 숫자가 먼저 나와있는 경우만 형변환 가능

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

// 연산자(Operator) : 프로그래밍에서의 다양한 연산을 위한 기호, 키원드
// 1. 대입연산자(=) : 저장할 변수 = 저장할 값
// 2. 산술연산자 (+ - * / %)
// 3. 복합 대입 연산자
let num4 = 10;
num4 = num + 10;
num4 += 20;

// 4. 장감 연산자
let num8 = 10;
num8++;
++num8;

// 5. 논리 연산자( ||, &&, !)
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자(===, !==, >, <, <=, >=)
// === : 값의 자료형까지 같은지까지 비교(권장)
// == : 값 자체만 비교
