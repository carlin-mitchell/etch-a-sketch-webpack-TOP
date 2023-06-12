import ControlPanel from "./ControlPanel";

const Main = () => {
  const main = Object.assign(document.createElement("main"), {});

  main.appendChild(ControlPanel());

  return main;
};

export default Main;