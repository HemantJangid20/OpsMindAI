import ChatBox from "./components/ChatBox";
import UploadSOP from "./components/UploadSOP";
import "./App.css";

function App() {
  return (
    <div className="app-container">

      <div className="sidebar">
        <h2 className="logo">OpsMind</h2>

        <div className="menu">
          <button className="menu-btn">Upload SOP</button>
          <button className="menu-btn">Chat AI</button>
        </div>
      </div>

      <div className="main-content">
        <h1 className="title">OpsMind AI Assistant</h1>

        <div className="card">
          <UploadSOP />
        </div>

        <div className="chat-card">
          <ChatBox />
        </div>
      </div>

    </div>
  );
}

export default App;