import React from "react";
import Button from "./Button";

const App = () => {
  const handleClick = () => {
    console.log("Funtions wrtn inside the Parent Component");
  };
  return (
    <>
      <div>APP COMPONENT</div>
      <Button data={{ a: { b: { s: "d" } } }} clickAction={handleClick}>
        Click Me!!!
      </Button>
    </>
  );
};

export default App;
