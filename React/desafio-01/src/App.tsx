import { useState } from "react";
import { EmptyMessage } from "./components/EmptyMessage";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskInfo } from "./components/TaskInfo";
import { TaskList } from "./components/TaskList";

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleCreateTask = (content: string) => {
    event?.preventDefault();
    const newTask: ITask = {
      id: String(new Date().getTime()),
      content,
      isCompleted: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
  };

  const handleUpdate = (id: string) => {
    const newTasksList = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTasksList);
  };

  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;
  const totalTasks = tasks.length;

  const handleDelete = (id: string) => {
    const newTaskList = tasks.filter((task) => task.id !== id);

    setTasks(newTaskList);
  };
  return (
    <>
      <Header />
      <Form handleCreateTask={handleCreateTask} />
      <TaskInfo total={totalTasks} totalCompleted={tasksCompleted} />
      {tasks.length === 0 ? (
        <EmptyMessage />
      ) : (
        <TaskList
          updateTask={handleUpdate}
          tasks={tasks}
          deleteTask={handleDelete}
        />
      )}
    </>
  );
}

export default App;
