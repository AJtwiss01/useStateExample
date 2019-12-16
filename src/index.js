import React from "react";
import ReactDOM from "react-dom";
import FeedBackEffect from "./components/FeedBackEffect";
import FeedBackSate from "./components/FeedBackState";
import FeedBackCustom from "./components/FeedBackCustom";

import "./styles.css";

const App = () => {
  return (
    <div>
      <FeedBackSate />
      <FeedBackEffect />
      <FeedBackCustom />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
