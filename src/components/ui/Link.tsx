import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

export default function Link({
  children,
  navigateTo,
}: {
  children: ReactNode;
  navigateTo: string;
}) {
  return (
    <NavLink
      to={navigateTo}
      className={({ isActive }) => (isActive ? "text-white" : "")}
    >
      {children}
    </NavLink>
  );
}
