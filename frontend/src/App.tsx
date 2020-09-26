// eslint-disable-next-line
import React, { Fragment, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import TaskForm from "./components/TaskForm";
import ListTasks from "./components/ListTasks";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const borde = {
  borderStyle: "solid",
};
interface Itask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Itask[]>([]);

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
            <TaskForm
              newTask={newTask}
              setNewTask={setNewTask}
              tasks={tasks}
              setTasks={setTasks}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6}>
            {tasks.map((task: Itask, index: number) => (
              <div key={index} className="card card-body">
                <ListTasks task={task} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
