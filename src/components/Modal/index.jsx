import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal && (
        <div className={styles.overlay}>
          <div className={styles.content}>
            <img src="/ponto.png" alt="" />
            <h1>Desculpe!</h1>
            <p>Não foi possível encontrar o repositório ou usuário desejado!</p>
            <button onClick={closeModal}>Certo</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
