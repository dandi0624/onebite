// 객체 1
// 원시 타입이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장할 수 있는 자료형을 의미
// 객체를 이용하면 현실세계에 존재하느 어떤 사물이나 개념을 표현하기 용이함

// 방법1. 객체 생성자
let obj1 = new Object();

// 방법2. 객체 리터럴
let obj2 = {};

// 2. 객체 프로퍼티(객체 속성)
// key:value형태
// 프로퍼티의 개수 제한 없음, value의 타입제한 없음
// key 값은 문자나 숫자만 가능
// key 띄어쓰기를 넣고 싶으면 ""로 묶어줌
let person = {
  // key : value
  name: "이정화",
  age: 26,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호표기법)
let name = person.name; // 점 표기법
console.log(name);
// 존재하지 않는 프로퍼티에 접근시 undefined

let age = person["age"]; // 괄호표기법 : 키 값으로 찾을시 ["key값"]로 접근해야함
console.log(age);

// 동적으로 프로퍼티에 접근한다면 괄호표기법을 추천
let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
// 그냥 없던 프로퍼티에 값 추가하면 됨
person.job = "fe developer";
person["favoriteFood"] = "피자";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
// 있는 프로퍼티에 값 수정하면 됨
person.job = "ecucator";
person["favoriteFood"] = "피자";

// 3.4 프로퍼티를 삭제하는 방법(delete연산자)
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자 : 존재하면 true | false)
// "key" in 객체명
let result = "name" in person;
let result2 = "cat" in person;
console.log(result);
