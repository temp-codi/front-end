import { dark, transition, grid } from "@/lib";

import {
  TClassName,
  TDarkClasses,
  TChildren,
  TOnClick,
  TTransitionClass,
  TPosition,
  TZindex,
} from "@/_types";

interface GridProps {
  onClick?: TOnClick;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  positionClasses?: TPosition;
  zIndex?: TZindex;
  children?: TChildren;
  style?: {};
}

const Grid = ({
  onClick,
  className,
  lightClasses,
  darkClasses,
  transitionClasses,
  positionClasses,
  zIndex,
  children,
  style,
}: GridProps) => {
  return (
    <div
      className={grid({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
        position: positionClasses,
        zIndex: zIndex,
      })}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Grid;
