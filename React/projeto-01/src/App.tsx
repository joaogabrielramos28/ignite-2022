import { EmptyMessage } from "./components/EmptyMessage";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskInfo } from "./components/TaskInfo";

function App() {
  return (
    <>
      <Header />
      <Form />
      <TaskInfo />
      <EmptyMessage />
    </>
  );
}

export default App;
