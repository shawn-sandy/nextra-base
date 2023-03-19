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
    screen.logTestingPlaygroundURL();
  });
});



describe("NavItem", () => {
  it("should render NavItem correctly", () => {
    const { asFragment } = render(
      <NavItem item={{name: "Home", route: "/"}} />
    );
    screen.logTestingPlaygroundURL();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Nav", () => {
  it("should render Nav correctly", () => {
    const { asFragment } = render(
      <Nav>
        <NavList items={itemsArray} />
      </Nav>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(itemsArray.length);
    expect(asFragment()).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});