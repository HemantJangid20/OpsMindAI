import ChatBox from "./components/ChatBox";
import UploadSOP from "./components/UploadSOP";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>OpsMind AI</h2>
      <UploadSOP />
      <ChatBox />
    </div>
  );
}

export default App;