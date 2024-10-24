// const moudleData = require("./math")

// console.log(moudleData.add(1,2));
// console.log(moudleData.sub(1,2));

// 위와 동일

// const {add, sub} = require("./math")

// console.log(add(1,2));
// console.log(sub(1,2));

//import mul from "./math.js"; // defulat로 정의한건 따로 불러줌
//import{add, sub} from "./math.js"
// 꼭 확장자 써야함
// 위를 단축
import mul, {add, sub} from "./math.js";

// console.log(add(1,2));
// console.log(sub(1,2));

// console.log(mul(2,3));


import randomColor from "randomcolor"; // 랜덤컬러라이브러리 
const color = randomColor();
console.log(color);

