import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/* const borde = {
  borderStyle: "solid",
}; */
interface Itask {
  name: string;
  done: boolean;
}

type Props = {
  task: Itask;
  index: number;
};

const ListTasks = ({ task, index }: Props) => {
  return (
    <div key={index} className="card card-body">
      <h2>{task.name}</h2>
    </div>
  );
};

export default ListTasks;
