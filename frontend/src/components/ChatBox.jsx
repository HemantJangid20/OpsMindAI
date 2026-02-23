import { useState } from "react";
import { sendQuestion } from "../api";

function ChatBox() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const ask = async () => {
    if (!question.trim()) return;
    const res = await sendQuestion(question);
    setMessages([...messages, { q: question, a: res.answer }]);
    setQuestion("");
  };

  return (
    <div>
      <h3>Chat</h3>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={ask}>Send</button>

      {messages.map((m, i) => (
        <div key={i}>
          <p><b>You:</b> {m.q}</p>
          <p><b>AI:</b> {m.a}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatBox;