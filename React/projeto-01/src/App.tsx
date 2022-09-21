import { EmptyMessage } from "./components/EmptyMessage";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskInfo } from "./components/TaskInfo";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <Form />
      <TaskInfo />
      <EmptyMessage />
      {/* <TaskList /> */}
    </>
  );
}

export default App;
