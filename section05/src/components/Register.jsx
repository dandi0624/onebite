import { useState, useRef } from "react";
//import { useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

//const Register = () => {
//   const [name, setName] = useState("이름");
//   const [birth, setBirth] = useState("");
//   const [country, setCountry] = useState("");
//   const [bio, setBio] = useState("");

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeBirth = (e) => {
//     setBirth(e.target.value);
//   };

//   const onChangeCountry = (e) => {
//     setCountry(e.target.value);
//   };

//   const onChangeBio = (e) => {
//     setBio(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} placeholder={"이름"} />
//       </div>
//       <div>
//         <input value={birth} onChange={onChangeBirth} type="date" />
//       </div>
//       <div>
//         <select value={country} onChange={onChangeCountry}>
//           <option></option>
//           <option value="kr">한국</option>
//           <option value="us">미국</option>
//           <option value="uk">영국</option>
//         </select>
//       </div>
//       <div>
//         <textarea value={bio} onChange={onChangeBio} />
//         {bio}
//       </div>
//     </div>
//   );
// -------------------------------------------------------------------

// 위의 코드를 간결하게
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();
  //console.log("Register 랜더링");

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // 아래 주석처리한 코드 줄이기
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      //console.log(inputRef.current);  -> <input name="name" placeholder="이름" value>
      inputRef.current.focus();
    }
  };

  //   const onChangeName = (e) => {
  //     setInput({
  //       ...input, // 기존의 input state에 들어있는 name이 아닌 다른 값들까지 변경되지 않도록 설정
  //       name: e.target.value,
  //     });
  //   };

  //   const onChangeBirth = (e) => {
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     });
  //   };

  //   const onChangeCountry = (e) => {
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     });
  //   };

  //   const onChangeBio = (e) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };

  // <button
  //   onClick={() => {
  //     refObj.current++;
  //     console.log(refObj.current);
  //   }}
  // >
  //   ref +1
  // </button>
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Register;
