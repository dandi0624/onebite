import "./App.css";
import { useReducer,useRef, createContext, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import Button from "./components/Button";
import Header from "./components/Header";


//import { getEmotionImage } from "./tuil/get-emotion-image";

// import emotion1 from "./assets/emotion1.png";
// import emotion2 from "./assets/emotion2.png";
// import emotion3 from "./assets/emotion3.png";
// import emotion4 from "./assets/emotion4.png";
// import emotion5 from "./assets/emotion5.png";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2024-11-27").getTime(),
//     emotionId: 1,
//     content: "1번 일기 내용"
//   },


function reducer(state, action){
  let nextState;

  switch(action.type){
    case 'INTI' : 
      return action.data;
    case 'CREATE': 
      { nextState = [action.data, ...state]; break};
    case 'UPDATE':
      {nextState =  state.map((item)=>String(item.id) === String(action.data.id)? action.data : item); break};
    case 'DELETE': 
      {nextState =  state.filter((item)=>String(item.id) !== String(action.id)); break};
    default: return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(()=>{
    const storedData = localStorage.getItem("diary");
    if(!storedData){
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item)=>{
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    })

    //console.log(maxId)
    idRef.current = maxId + 1;

    dispatch({
      type:"INTI",
      data: parsedData,
    })
    setIsLoading(false);
  },[]);


  // localStorage.setItem('test', 'hello');
  // localStorage.setItem("person", JSON.stringify({name:"이정환"}));

  // console.log(localStorage.getItem("test"));
  // console.log(JSON.parse(localStorage.getItem("person")));
  // JSON.parse(undefined)는 반드시 값이 있어야함 없음 오류//

  //localStorage.removeItem('test');
 // localStorage.removeItem('person'); 또는 애플리케이션에서 백스페이스로 지울 수 있음



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
  const onUpdate = (id, createdDate, emotionId, content)=>{
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


  if(isLoading){
    return <div>데이터 로딩중입니다...</div>;
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
      </div> */}

      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button> */}


  <DiaryStateContext.Provider value={data}>
  <DiaryDispatchContext.Provider value={
    {
      onCreate,
      onUpdate,
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
