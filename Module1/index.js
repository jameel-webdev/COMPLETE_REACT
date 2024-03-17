const child = React.createElement("p", {}, "Iam a child1");
const child2 = React.createElement("p", {}, "Iam a child2");
const div = React.createElement("div", { className: "react-text" }, [
  child,
  child2,
]);
console.log(div);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
