import { useState } from "react";

import Chat from "./components/Chat";
import Title from "./components/Title";

import "./styles.css";

export default function App() {
  // In this app, the user would have been fine in Title.js,
  //   however in a real application you'd want it here (in App.js)
  const [user, setUser] = useState("Nicolas");

  return (
    <div className="app">
      {/* App doesn't need to know about single messages, hence why Chat is linking to it instead; 
      then App needs to know about Chat to render all the messages  */}
      <Title user={user} />
      <Chat />
    </div>
  );
}
