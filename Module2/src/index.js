import React from "react";
import ReactDOM from "react-dom/client";

const jsx = <div>JSX WORKING</div>;
const div = React.createElement("div", { className: "react-text" }, [
  "REACT",
  jsx,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
