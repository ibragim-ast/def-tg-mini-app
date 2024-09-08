import { Route, Routes } from "react-router-dom";
import WebSocketScreen from "./components/WebSocketScreen/WebSocketScreen";
import ApiScreen from "./components/ApiScreen/ApiScreen";
import InfiniteScrollScreen from "./components/InfiniteScrollScreen/InfiniteScrollScreen";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/websocket" element={<WebSocketScreen />} />
        <Route path="/api" element={<ApiScreen />} />
        <Route path="/infinite" element={<InfiniteScrollScreen />} />
        <Route path="/" element={<WebSocketScreen />} />
      </Routes>
      <NavigationMenu />
    </div>
  );
}

export default App;
