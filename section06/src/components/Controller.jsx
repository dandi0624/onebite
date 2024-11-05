const Controller = ({onClickButton}) =>{
    return  (
        <div>
            <button onClick={()=>{
                onClickButton(-1)
            }}>-1</button>
            <button onClick={()=>{
                onClickButton(-10)
            }}>-10</button>
            <button onClick={()=>{
                onClickButton(-100)
            }}>-100</button>
            <button onClick={()=>{
                onClickButton(+100)
            }}>+100</button>
            <button onClick={()=>{
                onClickButton(+10)
            }}>+10</button>
            <button onClick={()=>{
                onClickButton(+1)
            }}>+1</button>
        </div>
    );
}

export default Controller;

// Controller에 state를 만들면 x  : 컴포넌트간의 데이터를 주고받는건 오직 부모에서 자식에게만 
//                                 전달되기 때문에 형제사이인 Viewer에 props로 전달 불가능