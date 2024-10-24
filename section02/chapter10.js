// 1. Date 객체 생성하는 방법
let date1 = new Date(); // 생성자
//console.log(date1);

let date2 = new Date("1997-07-22/10:10:10");
let date3 = new Date(1998, 1, 7, 23, 59, 59);
//console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초(UTC)"로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
//console.log(ts1);

let date4 = new Date(ts1);
//console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconde = date1.getSeconds();

//console.log(year, month, date, hour, minute, seconde);

// 4 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2 + 1);
date1.setDate(20);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
//console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Apr 20 2023
console.log(date1.toLocaleString()); // 2023.04.20 오후 11:59:59
