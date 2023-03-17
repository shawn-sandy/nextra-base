import { render, screen } from "@testing-library/react";
import { NavList } from "@/components/nav";

const MyComponent = () => (
  <>
    <p> My component</p>
  </>
);

describe("nav", () => {
  it("renders nav", () => {
    const component = render(<MyComponent />);
    expect(component).toMatchSnapshot();
  });
});
