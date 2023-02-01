import { TClassName, TPosition, TZindex, TGrid, THover } from "@/_types";

interface IClassComb {
  transition?: string;
  dark?: string;
  className?: TClassName;
  position?: TPosition;
  zIndex?: TZindex;
  grid?: TGrid;
  hover?: THover;
}

const classCombine = ({
  transition,
  dark,
  className,
  position,
  zIndex,
  grid,
  hover,
}: IClassComb) => {
  let newClasses = "";
  if (transition) {
    newClasses += transition + " ";
  }
  if (dark) {
    newClasses += dark + " ";
  }
  if (position) {
    newClasses += position + " ";
  }
  if (zIndex) {
    newClasses += zIndex + " ";
  }
  if (grid) {
    newClasses += grid + " ";
  }
  if (hover) {
    newClasses += hover + " ";
  }
  if (className) {
    newClasses += className + " ";
  }

  return newClasses;
};

export default classCombine;
