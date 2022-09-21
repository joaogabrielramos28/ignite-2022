import React from "react";
import styles from "./styles.module.css";

interface TaskInfoProps {
  total: number;
  totalCompleted: number;
}

export const TaskInfo: React.FC<TaskInfoProps> = ({
  total,
  totalCompleted,
}: TaskInfoProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.tasks_info}>
        <div className={styles.created_tasks}>
          <p>
            Tarefas criadas
            <span>{total}</span>
          </p>
        </div>

        <div className={styles.completed_tasks}>
          <p>
            Concluídas
            <span>
              {totalCompleted === 0
                ? totalCompleted
                : `${totalCompleted} de ${total}`}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
