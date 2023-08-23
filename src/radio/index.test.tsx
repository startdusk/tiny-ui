import { fireEvent, render, screen } from "@testing-library/react";
import Radio from ".";

describe("Radio", () => {
  test("renders Radio", () => {
    render(<Radio>click me</Radio>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should support onChange", () => {
    const onChange = jest.fn();
    render(<Radio onChange={onChange}>click me</Radio>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onChange).toBeCalled();
  });

  test("should support under control", () => {
    const onChange = jest.fn();
    render(
      <Radio checked onChange={onChange}>
        click me
      </Radio>
    );
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onChange).toBeCalledTimes(0);
  });
});
