import React from "react";

import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav>
        <Link to={"/"}>
          <li>Inicio</li>
        </Link>
        <Link to={"favoritos"}>
          <li>Favoritos</li>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
