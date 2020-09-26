import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("added task to todo", () => {
  render(<App />);
  fireEvent.change(screen.getByTestId("task-inputs"), {
    target: { value: "josue" },
  });
  fireEvent.click(screen.getByText(/Enviar/i));
  fireEvent.change(screen.getByTestId("task-inputs"), {
    target: { value: "pedro" },
  });
  fireEvent.click(screen.getByText(/Enviar/i));
  expect(screen.queryByText("josue")).toBeInTheDocument();
  expect(screen.queryByText("pedro")).toBeInTheDocument();
});
