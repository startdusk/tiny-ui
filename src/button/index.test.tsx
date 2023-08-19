import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  test("renders Button", () => {
    render(<Button>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders primary Button", () => {
    const { container } = render(<Button type="primary">click me</Button>);
    expect(container.querySelector(".ant-btn-primary")).toBeInTheDocument();
  });

  test("renders normal Button", () => {
    const { container } = render(<Button>click me</Button>);
    expect(container.querySelector(".ant-btn-normal")).toBeInTheDocument();
  });

  test("renders text Button", () => {
    const { container } = render(<Button type="text">click me</Button>);
    expect(container.querySelector(".ant-btn-text")).toBeInTheDocument();
  });

  test("renders dashed Button", () => {
    const { container } = render(<Button type="dashed">click me</Button>);
    expect(container.querySelector(".ant-btn-dashed")).toBeInTheDocument();
  });

  test("renders link Button", () => {
    const { container } = render(<Button type="link">click me</Button>);
    expect(container.querySelector(".ant-btn-link")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });

  test("should support blur", () => {
    const onBlur = jest.fn();
    render(<Button onBlur={onBlur}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    fireEvent.blur(linkElement);
    expect(onBlur).toBeCalled();
  });

  test("should support focus", () => {
    const onFocus = jest.fn();
    render(<Button onFocus={onFocus}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    fireEvent.focus(linkElement);
    expect(onFocus).toBeCalled();
  });

  test("renders small Button", () => {
    const { container } = render(<Button size="small">click me</Button>);
    expect(container.querySelector(".ant-btn-small")).toBeInTheDocument();
  });

  test("renders medium Button", () => {
    const { container } = render(<Button size="medium">click me</Button>);
    expect(container.querySelector(".ant-btn-medium")).toBeInTheDocument();
  });

  test("renders large Button", () => {
    const { container } = render(<Button size="large">click me</Button>);
    expect(container.querySelector(".ant-btn-large")).toBeInTheDocument();
  });
});
