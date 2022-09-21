import { Check, Trash } from "phosphor-react";
import React from "react";
import { ITask } from "../../App";
import styles from "./styles.module.css";

interface TaskProps extends ITask {
  updateTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const Task: React.FC<TaskProps> = ({
  content,
  isCompleted,
  id,
  updateTask,
  deleteTask,
}: TaskProps) => {
  const handleUpdate = () => {
    updateTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };
  return (
    <div className={styles.container}>
      <button
        className={isCompleted ? styles.completed : styles.toDo}
        onClick={handleUpdate}
      >
        <Check size={12} />
      </button>
      <p
        className={isCompleted ? styles.content_completed : styles.content_toDo}
      >
        {content}
      </p>
      <button className={styles.delete} onClick={handleDelete}>
        <Trash size={16} />
      </button>
    </div>
  );
};
