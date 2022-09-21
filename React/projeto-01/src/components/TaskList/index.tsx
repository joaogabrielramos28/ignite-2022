import React from "react";
import { Task } from "../Task";
import styles from "./styles.module.css";
export const TaskList: React.FC = () => {
  return (
    <section className={styles.container}>
      <Task />
    </section>
  );
};
