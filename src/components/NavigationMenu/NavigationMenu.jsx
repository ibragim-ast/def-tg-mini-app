import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationMenu.module.css";

function NavigationMenu() {
  const location = useLocation();

  return (
    <nav className={styles.menu}>
      <Link to="/websocket">
        <button
          className={
            location.pathname === "/websocket"
              ? styles.activeBtn
              : styles.button
          }
        >
          WebSocket
        </button>
      </Link>
      <Link to="/api">
        <button
          className={
            location.pathname === "/api" ? styles.activeBtn : styles.button
          }
        >
          API
        </button>
      </Link>
      <Link to="/infinite">
        <button
          className={
            location.pathname === "/infinite" ? styles.activeBtn : styles.button
          }
        >
          Infinite Scroll
        </button>
      </Link>
    </nav>
  );
}

export default NavigationMenu;
