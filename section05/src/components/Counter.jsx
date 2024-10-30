import { uesState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <Counter />
    </>
  );
};

export default Counter;
