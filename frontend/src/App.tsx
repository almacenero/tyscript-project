import React, { Fragment, useState } from "react";
import { Button, Form, Input, Container, Col, Row } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const borde = {
  borderStyle: "solid",
};
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
      <Container
        css={[
          borde,
          {
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            padding: 15,
          },
        ]}
      >
        <Row className="justify-content-center">
          <Col xs={5}>
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
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6}>
            {tasks.map((task: Itask, index: number) => (
              <div key={index} className="card card-body">
                <h2>{task.name}</h2>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
