import { render, screen } from "@testing-library/react";
import { NavList } from "../nav";

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



const itemsArray = [
  {
    route: "/",
    name: "home",
  },
  {
    route: "/about",
    name: "about",
  },
];

describe("NavList", () => {
  test("should render NavList", () => {
    render(<NavList items={itemsArray} />);
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
  });
});
