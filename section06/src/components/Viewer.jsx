const Viewer = ({count}) =>{
    return (
    <div>
        <div>현재 카운트 : </div>
        <h1>{count}</h1>
    </div>
    );
}

export default Viewer;

// Viewer에 state를 만들면 x  : 컴포넌트간의 데이터를 주고받는건 오직 부모에서 자식에게만 
//                             전달되기 때문에 형제 사이인Controller에 props로 전달 불가능