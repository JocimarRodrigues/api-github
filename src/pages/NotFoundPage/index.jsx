import React from "react";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_content}>
        <img src="/github404.png" alt="" />
        <h1>Oops! Página não encontrada.</h1>
        <h2>Erro: 404</h2>
        <h3>Por favor, verifique a URL ou volte à página anterior.</h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
