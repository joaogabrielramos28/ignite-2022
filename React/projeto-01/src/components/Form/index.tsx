import React from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./styles.module.css";

export const Form: React.FC = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        name=""
        id=""
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
};
