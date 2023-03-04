import { FP } from "@fpkit/react";
import Link from "next/link";
import { PageOpts } from "nextra";
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

export const NavItem = ({ item }) => {
 
  return (
    <>
      <li key={item.name}>
        <Link href={item.route}>{item.name}</Link>
      </li>
    </>
  );
};


export const NavList: React.FC<NavItemProps> = ({ items }) => {
  
  return (
    <>
      {items?.map((item: {route: string, name: string}) => {
        return (
          <>
          <li key={React.useId()}>
            <Link href={item?.route}>{item?.name}</Link>
          </li>
        </>
        )
      })}
    </>
  );
};