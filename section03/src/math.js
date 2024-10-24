// math 모듈
// function add(a, b){
//     return a+b;
// }

// function sub(a, b){
//     return a-b;
// }
export function add(a, b){
    return a+b;
}

export function sub(a, b){
    return a-b;
}

export default function multiply(a,b){ 
    return a*b;
}

// CJS(Common JS) Module 
// module.exports = {
//     //add : add,
//     //sub : sub,
//     add,
//     sub,
// }

// ES Module (ESM)
//export {add, sub}; function 앞에 export를 쓰면 따로 정의하지 않아도 됨.

// cjs 모듈과 es모듈을 같이 사용할 수 없다.
// ESM는 package.jsom에서 속성 설정 해줌  "type":"module" 
// 같이 쓰면 ReferenceError: require is not defined in ES module scope, you can use import instead 이런오류뜸


// npm i