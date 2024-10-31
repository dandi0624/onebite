// 연산자 2
// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자
// -> 연산에 참여한 값이 모두 존재하는 값이라면 처음의 값 반환

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 결과값 10
let var5 = var1 ?? var3; // 결과값 20
let var6 = var2 ?? var3; // 10 => 맨 처음의 값

let userName = "이정환";
let userNicName = "Winterlood";

// 요구사항 : 사용자의 userName이 있으면 userName으로 없다면 userNickName 반환
let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; // 결과값 String

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수res에 var8의 값이 짝수 -> "짝", 홀수-> "홀"
let res = var8 & (2 === 0) ? "짝" : "홀";