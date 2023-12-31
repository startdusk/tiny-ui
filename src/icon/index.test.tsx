import { fireEvent, render } from "@testing-library/react";
import Icon from ".";

describe("Icon", () => {
  test("renders Icon", () => {
    const { container } = render(<Icon type="fixed" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  test("custom className", () => {
    const { container } = render(<Icon type="fixed" className="custom" />);
    expect(container.querySelector(".custom")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    const { container } = render(<Icon onClick={onClick} />);
    const linkElement = container.querySelector("svg") as SVGSVGElement;
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
});
