import React from "react";
import { TDarkProp } from "@/_types";

interface IDark {
  dark: TDarkProp;
  children?: React.ReactNode;
}

const Dark = ({ dark, children }: IDark) => {
  let darkClass = dark ? "dark" : "";
  return <div className={darkClass}>{children}</div>;
};

export default Dark;
