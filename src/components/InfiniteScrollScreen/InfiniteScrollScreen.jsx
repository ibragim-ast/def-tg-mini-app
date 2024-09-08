import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import styles from "./InfiniteScrollScreen.module.css";

const InfiniteScrollScreen = () => {
  const [items, setItems] = useState([]);
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push({
        id: nanoid(6),
        text: `Элемент ${contentIndex + i + 1}`,
      });
    }
    setContentIndex(contentIndex + 5);
    setItems((prev) => [...prev, ...newItems]);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Бесконечная лента</h2>
      <div>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.text}</h3>
            <p className={styles.cardDescription}>Описание</p>
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={loadMore}>
        Загрузить еще
      </button>
    </div>
  );
};

export default InfiniteScrollScreen;
