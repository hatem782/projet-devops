import { render, screen, cleanup } from "@testing-library/react";
//import ToDo from "./ToDo";
import "@testing-library/jest-dom/extend-expect";
import ReactApp from "../ReactApp";

test("should render todo component", () => {
  render(<ReactApp />);
  const todoElement = screen.getByTestId("todo-1");
  //expect(true).toBe(true);
  expect(todoElement).toBeInTheDocument();
});
