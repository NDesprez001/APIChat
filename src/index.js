import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { queryConversation, postMessage } from "./chat";
import { useInterval } from "./interval"
import { Icon } from "./icon"

function App() {
  const [conversation, setConversation] = React.useState();
  const [saying, setSaying] = React.useState();

  

  const updateMessages = () => {
    queryConversation().then(newConversation => {
      setConversation(newConversation);
    });
  };

  React.useEffect(() => {
    updateMessages();
  }, []);

  const handleEnter = event => {
    if (event.keyCode === 13) {
      postMessage("Choeurlee" , saying).then(() => {
        updateMessages();
        setSaying("");
      });
    }
  };

  return (
    <div className="App">
      <h2>Chat App</h2>
      <p>{JSON.stringify(conversation)} </p>

      <input
        type="text"
        value={saying}
        onChange={ev => setSaying(ev.target.value)}
        onKeyDown={handleEnter}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);