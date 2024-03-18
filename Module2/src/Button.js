import React from "react";

const Button = (props) => {
  const { children, clickAction, data } = props;

  const handleClick = () => {
    console.log("Functions writn inside the button component");
    console.log("Second function from the parent called below");
    clickAction();
  };

  return (
    <div onClick={handleClick}>
      {children} {data?.a?.b?.c}
    </div>
  );
};

export default Button;
