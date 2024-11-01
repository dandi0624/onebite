// const Button = (props) => {
//     console.log(props)
//     return (
//         <button style={{color: props.color}}>
//             {props.text} - {props.color.toUpperCase}
//             {children}
//         </button>
//     );
// };

const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
