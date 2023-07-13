"use client";

import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from "react";

interface MenuIconProps extends ButtonHTMLAttributes<Element> {
  shadowColor?: string;
}

const MenuIcon: FunctionComponent<MenuIconProps> = ({
  children,
  onClick,
  ...restProps
}) => {
  return (
    <button className="p-2" onClick={onClick ?? (() => {})}>
      {children}
    </button>
  );
};

export default MenuIcon;
