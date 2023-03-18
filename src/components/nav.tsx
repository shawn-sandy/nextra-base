import { FP } from "@fpkit/react";
import Link from "next/link";
import React from "react";

export interface NavItemProps {
  item: [{ name: string; route: string }];
}
export default function Nav({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <FP as="nav" {...props}>
      {children}
    </FP>
  );
}

export const NavItem = ({ item, ...props }) => {

  if(!item) {
    throw new Error("NavItem requires a item prop");
  }
 
  return (
    <>
      <li {...props}>
        <Link style={{textTransform: "capitalize"}} href={item.route}>{item.name}</Link>
      </li>
    </>
  );
};

export const NavList = ({ items }) => {
  return (
    <>
      {items?.map((item: {route: string, name: string}) => {
        return (
          <NavItem key={React.useId()} item={item} />
        )
      })}
    </>
  );
};
