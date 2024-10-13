import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { ChanelListContainer, ChannelContainer } from "./components";
import Cookies from "universal-cookie";
import './App.css'
const apiKey = "pungqnray3fe";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
