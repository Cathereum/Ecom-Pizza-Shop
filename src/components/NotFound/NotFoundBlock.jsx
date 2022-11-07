import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Извините, но тут ничего нет :(</h1>
      <p className={styles.description}>Для заказа добавьте товар в корзину </p>
    </div>
  );
};

export default NotFoundBlock;
