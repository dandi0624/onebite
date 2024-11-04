import "./App.css";
//import { useState } from "react";
// import Header from "./components/Header.jsx";
// import Main from "./components/Main.jsx";
// import Footer from "./components/Footer"; // 리액트는 확장자 안써도 됨
// import Button from './components/Button';
//import Bulb from "./components/Bulb";
//import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  // 부모 컴포넌트 , root컴포넌트는 조상
  // const buttonProps = {
  //   text : "메일",
  //   color : "red",
  //   a : 1,
  //   b : 2,
  //   c : 3,

  /* <Button text={"메일"} color={"red"} /> */

  /* <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}/> 
        <Header />
      </Button>*/

  //console.log(state);

  // return (
  //   <>
  //     <Bulb />
  //     <Counter />
  //   </>
  // );

  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
