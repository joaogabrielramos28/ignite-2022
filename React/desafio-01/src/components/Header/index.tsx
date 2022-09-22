import React from "react";
import Logo from "../../assets/Logo.png";
import styles from "./styles.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt={"todo logo"} />
    </header>
  );
};
