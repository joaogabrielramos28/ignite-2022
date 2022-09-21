import { Check, Trash } from "phosphor-react";
import React from "react";
import styles from "./styles.module.css";

export const Task: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.completed}>
        <Check size={12} />
      </button>
      <p className={styles.content_toDo}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.delete}>
        <Trash size={16} />
      </button>
    </div>
  );
};
