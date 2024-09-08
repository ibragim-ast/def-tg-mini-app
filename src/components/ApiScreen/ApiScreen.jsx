import { useEffect, useState } from "react";
import fetchApiData from "../../utils/api";

import styles from "./ApiScreen.module.css";
const ApiScreen = () => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetchApiData().then((data) => {
      setRate(data.USD);
    });
  }, []);

  return (
    <div className={styles.apiScreen}>
      <h2 className={styles.title}>Курсы валют</h2>
      <p className={styles.data}>
        Курс USD: {rate ? `${rate} руб.` : "Загрузка..."}
      </p>
      <button
        className={styles.button}
        onClick={() => fetchApiData().then((data) => setRate(data.USD))}
      >
        Обновить
      </button>
    </div>
  );
};

export default ApiScreen;
