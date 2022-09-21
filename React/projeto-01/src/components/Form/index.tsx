import React, { useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./styles.module.css";

interface FormProps {
  handleCreateTask: (content: string) => void;
}

export const Form: React.FC<FormProps> = ({ handleCreateTask }: FormProps) => {
  const [content, setContent] = useState("");

  const handleAdd = () => {
    handleCreateTask(content);
    setContent("");
  };
  return (
    <form onSubmit={handleAdd} className={styles.form}>
      <input
        type="text"
        required
        value={content}
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className={styles.button}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
};
