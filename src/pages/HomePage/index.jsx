import React, { useState } from "react";
import logo from "./gitHubLogo.png";
import styles from "./HomePage.module.scss";
import Form from "../../components/Form";

const HomePage = () => {
  const [selectedButton, setSelectedButton] = useState("user");

  const onSelectedButton = (btn) => {
    setSelectedButton(btn);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo Github" />
      <Form selectedButton={selectedButton}/>
      <div className={styles.buttons}>
        <button
          className={selectedButton === "user" ? styles.selectedButton : ""}
          onClick={() => onSelectedButton("user")}
        >
          Usuario
        </button>
        <button
          className={
            selectedButton === "repository" ? styles.selectedButton : ""
          }
          onClick={() => onSelectedButton("repository")}
        >
          Repositorio
        </button>
      </div>
    </div>
  );
};

export default HomePage;
