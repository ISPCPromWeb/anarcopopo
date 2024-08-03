"use client";
import { useEffect } from "react";

export const BootstrapWrapper = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <div>{children}</div>;
};
