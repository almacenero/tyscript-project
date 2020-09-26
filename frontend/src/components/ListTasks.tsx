// eslint-disable-next-line
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
};

const ListTasks = ({ task }: Props) => {
  return <h2>{task.name}</h2>;
};

export default ListTasks;
