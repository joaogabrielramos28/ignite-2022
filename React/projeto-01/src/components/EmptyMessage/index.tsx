import React from "react";
import styles from "./styles.module.css";
import ClipBoard from "../../assets/clipboard.svg";
export const EmptyMessage: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src={ClipBoard} />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  );
};
