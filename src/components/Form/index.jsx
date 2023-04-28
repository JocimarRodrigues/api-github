import React from "react";
import { FaSearch } from 'react-icons/fa';
import styles from './Form.module.scss';



const Form = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <>
      <form className={styles.container} onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar..." />
        <button>
            <FaSearch size={20}/>
            </button>
      </form>
    </>
  );
};

export default Form;
