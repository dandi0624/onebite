import "./App.css";
import { useReducer,useRef, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
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

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-11-27").getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id: 2,
    createdDate: new Date("2024-11-26").getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  },
  {
    id: 3,
    createdDate: new Date("2024-10-26").getTime(),
    emotionId: 3,
    content: "3번 일기 내용"
  }
]

function reducer(state, action){
  switch(action.type){
    case 'CREATE': return [action.data, ...state];
    case 'UPDATE': return state.map((item)=>String(item.id) === String(action.data.id)? action.data : item);
    case 'DELETE': return state.filter((item)=>String(item.id) !== String(action.id));
    default: return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // const nav = useNavigate();

  // const onClickButton = () => {
  //   nav("/new");
  // };

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) =>{
      // 새로운 일기를 추가하는 기능
      dispatch({
        type:"CREATE",
        data: {
          id: idRef.current++,
          createdDate,
          emotionId,
          content,
        }
      })
  }


  // 기존 일기 수정
  const onUdate = (id, createdDate, emotionId, content)=>{
    dispatch(
    {
      type: "UPDATE",
      data: {id, createdDate, emotionId, content}
    })
  }



  // 기존 일기 삭재
  const onDelete = (id)=>{
    dispatch({
      type: "DELETE",
      id
    })
  }




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

      {/* <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      /> */}

      {/* <Button
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
      /> */}

      {/* <button onClick={()=>{
        onCreate(new Date().getTime(), 1, "Hello");
      }}>일기 추가 테스트</button>

      <button onClick={()=>{
        onUdate(1, new Date().getTime(), 3, "수정된일기입니다.")
      }}>일기 수정 테스트</button>
      
      <button onClick={()=>{
        onDelete(1)
      }}>일기 수정 테스트</button> */}


  <DiaryStateContext.Provider value={data}>
  <DiaryDispatchContext.Provider value={
    {
      onCreate,
      onUdate,
      onDelete
    }
  }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </DiaryDispatchContext.Provider>
  </DiaryStateContext.Provider>    
    </>
  );
}

// <Routes> 안에는 <Route>태그만 사용 가능함 <div>등 사용하면 오류
export default App;
