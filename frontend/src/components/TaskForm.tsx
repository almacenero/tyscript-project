// eslint-disable-next-line
import React from "react";
import { Button, Form, Input } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/* const borde = {
  borderStyle: "solid",
}; */
type FormElement = React.FormEvent<HTMLFormElement>;
interface Itask {
  name: string;
  done: boolean;
}

type Props = {
  newTask: string;
  tasks: Itask[];
  setNewTask: any;
  setTasks: any;
};

const TaskForm = ({ newTask, tasks, setNewTask, setTasks }: Props) => {
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
    <Form onSubmit={handleSubmit} css={{ marginBottom: 15 }}>
      <Input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        css={{ marginBottom: 15 }}
        data-testid="task-inputs"
      />
      <Button>Enviar</Button>
    </Form>
  );
};

export default TaskForm;
