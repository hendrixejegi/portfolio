import "./style.css";
import Layout from "./components/layout.js";

const Home = () => {
  return `
    <div>this is the home</div>
    <div>this is the second div in home</div>
  `;
};

document.querySelector("#app").innerHTML = `
  ${Layout(Home)}
`;
