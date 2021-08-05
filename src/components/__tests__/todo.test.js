import { cleanup, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import * as renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("should render non-completed todo ", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("should render completed todo ", () => {
  const todo = { id: 2, title: "wash car", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash car");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("matches snapshot 1", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("matches snapshot 2", () => {
  const todo = { id: 2, title: "wash car", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
