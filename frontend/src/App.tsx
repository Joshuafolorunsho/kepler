import React, { useState } from "react";

function ParentComponent({ handleClick }: { handleClick: () => void }) {
  return (
    <div>
      <ChildComponent1 />
      <ChildComponent2 />
      <ChildComponent3 handleClick={handleClick} />
    </div>
  );
}

const ChildComponent1 = React.memo(() => {
  console.log("Child1");
  return (
    <div>
      <h1>Child2</h1>
    </div>
  );
});

const ChildComponent2 = React.memo(() => {
  console.log("Child2");
  return (
    <div>
      <h1>Child2</h1>
    </div>
  );
});

const ChildComponent3 = ({ handleClick }: { handleClick: () => void }) => {
  console.log("Child3");
  return (
    <div>
      <h1>Child3</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <ParentComponent handleClick={handleClick} />
    </>
  );
}

export default App;
