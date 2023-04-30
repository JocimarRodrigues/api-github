import React from 'react'
import styles from './Modal.module.scss';

const Modal = ({showModal}) => {
  return (
    <>
    {showModal && (
    <div className={styles.overlay}>
        <div className={styles.content}>
            Teste
        </div>
    </div>
    )}
    </>
  )
}

export default Modal