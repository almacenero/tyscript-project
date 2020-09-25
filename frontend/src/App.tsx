import React, { Fragment, useState } from "react";
import { createNoSubstitutionTemplateLiteral } from "typescript";

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
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string) => {
    const newTasks: Itask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />

        <button>Enviar</button>
      </form>
    </Fragment>
  );
}

export default App;
