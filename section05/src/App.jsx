
import './App.css'
import {useState} from "react";
// import Header from "./components/Header.jsx"; 
// import Main from "./components/Main.jsx";
// import Footer from "./components/Footer"; // 리액트는 확장자 안써도 됨
// import Button from './components/Button';

const Bulb = ({light}) =>{
  console.log(light);
  return <div>{light === 'ON' ? <h1 style={{backgroundColor:"orange"}}>ON</h1>
                              : <h1 style={{backgroundColor:"gray"}}>OFF</h1>}
                              </div>
}


function App() {  // 부모 컴포넌트 , root컴포넌트는 조상
  // const buttonProps = {
  //   text : "메일",
  //   color : "red",
  //   a : 1,
  //   b : 2,
  //   c : 3,
  
  /* <Button text={"메일"} color={"red"} /> */
  
        /* <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}/> */
  
  const [count, setCount] = useState(0); 
  const [light, setLight] = useState("OFF");
  //console.log(state);

  return<>
    <div>
      <Bulb light={light} />
      <button onClick={()=>{
        setLight(light === 'ON' ? "OFF" : "ON");
      }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>

  <div>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count +1)
    }}
    >
      +
    </button>
  </div>
  </>
}

export default App
