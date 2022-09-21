import React from "react";
import styles from "./styles.module.css";

export const TaskInfo: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.tasks_info}>
        <div className={styles.created_tasks}>
          <p>
            Tarefas criadas
            <span>0</span>
          </p>
        </div>

        <div className={styles.completed_tasks}>
          <p>
            Concluídas
            <span>0</span>
          </p>
        </div>
      </div>
    </section>
  );
};
