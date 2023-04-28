import React from "react";

import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <span>
        <b>GitHub</b> Search
      </span>
      <nav>
        <Link to={"/"}>
          <li>Inicio</li>
        </Link>
        <Link to={"favoritos"}>
          <li>favoritos</li>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
