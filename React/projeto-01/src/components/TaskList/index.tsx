import React from "react";
import { ITask } from "../../App";
import { Task } from "../Task";
import styles from "./styles.module.css";

interface TaskListProps {
  tasks: ITask[];
  updateTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  updateTask,
  deleteTask,
}: TaskListProps) => {
  return (
    <section className={styles.container}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.content}
          isCompleted={task.isCompleted}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </section>
  );
};
