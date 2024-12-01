import ChatDisplay from "./chatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./matchesDisplay";

const ChatContainer = () => {
  return (
    <div className="chat-container">
      <ChatHeader />
      
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>

      <MatchesDisplay />
      <ChatDisplay />
    </div>
  );
};
export default ChatContainer;
