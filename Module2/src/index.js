import React from "react";
import ReactDOM from "react-dom/client";

const booLean = true;
const trueText = "Im 20 years old";
const falseText = "Im 15 years old";

const handleClick = () => {
  console.log("Iclicked");
};

const adult = (
  <div>
    {trueText} <span onClick={handleClick}>I have license</span>
  </div>
);
const kid = (
  <div>
    {falseText} <span>I don have license</span>
  </div>
);

const grownups = booLean ? adult : kid;

const LicenseComponent = function () {
  return (
    <div>
      {grownups}
      <h3>This is the Functional Component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LicenseComponent />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
