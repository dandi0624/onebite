import { useState } from "react";
import useInput from "./../hooks/useInput";
// 3가지 hook 관련된 팀
// 1. 함수 컴포넌ㅌ,, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

// 기존의 방식
// const HookExam = () => {
//   const [input, setInput] = useState("");

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div>
//       <input value={input} onChange={onChange} />
//     </div>
//   );
// };

// 위의 방식을 간결하게

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
