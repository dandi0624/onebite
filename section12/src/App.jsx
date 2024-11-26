import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./tuil/get-emotion-image";

// import emotion1 from "./assets/emotion1.png";
// import emotion2 from "./assets/emotion2.png";
// import emotion3 from "./assets/emotion3.png";
// import emotion4 from "./assets/emotion4.png";
// import emotion5 from "./assets/emotion5.png";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      {/* img파일을 /src/assets/ 이 아닌 public에 보관할 경우
          <img src={"/emotion1.png"} /> 경로를 써 줌 -> 다수의 파일을 보관할 경우 좋지만
          최적화가 되지 않음

          한 번 불러온 이미지들을 다시 불러오지 않도록 브라우저의 캐시를 이용하여 이미지를 최적화하기 위해서
           src/attsts 폴더에 보관한 후 코드상에서 import문을 통해서 불러와야 함 / 소수의 이미지를 보관하는 경우
      */}

      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div> */}

      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button> */}

      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button
        text={123}
        onClick={() => {
          console.log("123버튼 클릭!");
        }}
      />
      <Button
        text={123}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123버튼 클릭!");
        }}
      />
      <Button
        text={123}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123버튼 클릭!");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

// <Routes> 안에는 <Route>태그만 사용 가능함 <div>등 사용하면 오류
export default App;
