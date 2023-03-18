import { render, screen } from "@testing-library/react";
import Nav, { NavList, NavItem } from "../nav";

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
    render(<Nav><NavList items={itemsArray} /></Nav>);
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
  });
});



describe("NavItem", () => {
  it("should render NavItem correctly", () => {
    const { asFragment } = render(
      <NavItem item={{name: "Home", route: "/"}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});