import { fireEvent, render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag", () => {
  test("renders Tag", () => {
    render(<Tag>click me</Tag>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should support on Close", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Tag closable onClose={onClose}>
        tag
      </Tag>
    );
    const linkElement = container.querySelector("svg") as SVGSVGElement;
    fireEvent.click(linkElement);
    expect(onClose).toBeCalled();
  });
});
