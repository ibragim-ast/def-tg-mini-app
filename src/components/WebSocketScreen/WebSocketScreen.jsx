import { useEffect, useState } from "react";

import styles from "./WebSocketScreen.module.css";

export default function WebSocketScreen() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("wss://echo.websocket.org");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, `Received: ${event.data}`]);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error", error);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(inputValue);
      setMessages((prev) => [...prev, `Sent: ${inputValue}`]);
      setInputValue("");
    } else {
      console.error("WebSocket is not open");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>WebSocket</h2>
      <div>
        {messages.map((msg, index) => (
          <div className={styles.messages} key={index}>
            {msg}
          </div>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter message"
        />
        <button className={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
