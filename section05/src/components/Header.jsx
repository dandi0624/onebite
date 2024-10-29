// function Header(){
//   return(
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }
// 위와 동일 컴포넌트로 쓸 함수의 이름은 무조건 첫글자는 대문자
const Header = () => { // 자식 컴포넌트
    return(
      <header>
        <h1>header</h1>
      </header>
    );
  };

export default Header;