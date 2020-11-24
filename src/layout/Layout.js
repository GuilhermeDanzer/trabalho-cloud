import React from "react";
import { Header } from "../components/Header";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
