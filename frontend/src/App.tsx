import React, { Fragment, useState } from "react";
type FormElement = React.FormEvent<HTMLFormElement>;
interface Itask {
  name: string;
  done: boolean;
}
function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Itask[]>([]);
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
  };
  const addTask = (name: string) => {
    const newTasks: Itask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} />
      </form>
      <button>Enviar</button>
    </Fragment>
  );
}

export default App;
