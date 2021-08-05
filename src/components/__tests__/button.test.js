import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { cleanup, render } from "@testing-library/react";
// import { renderer } from "react-test-renderer";
import * as renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click me"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Click me");
});

it("matches snapshot 1", () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Button label="Click me"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
