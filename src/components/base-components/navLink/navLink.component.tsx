import React from "react";
import { NavLink as NavigationLink } from "react-router-dom";
import { ComponentProps } from "../component";
import { joinClass } from "../../../helpers";

type NavLinkProps = ComponentProps & {
  to: string;
  activeClassName?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  activeClassName,
  ...props
}) => {
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    isActive && activeClassName
      ? joinClass(props.className, activeClassName)
      : props.className;

  return <NavigationLink {...props} to={to} className={getClassName} />;
};
