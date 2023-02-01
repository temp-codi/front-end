import { Align, Justify, Direction } from "@/_types";
import tw from "twin.macro";

const alignSwitch = (align: Align) => {
  switch (align) {
    case "start":
      return tw`items-start`;
    case "end":
      return tw`items-end`;
    case "center":
      return tw`items-center`;
    default:
      return;
  }
};
const justifySwitch = (align: Justify) => {
  switch (align) {
    case "start":
      return tw`justify-start`;
    case "end":
      return tw`justify-end`;
    case "center":
      return tw`justify-center`;
    case "between":
      return tw`justify-between`;
    default:
      return;
  }
};
const directionSwitch = (align: Direction) => {
  switch (align) {
    case "row":
      return tw`flex-row`;
    case "col":
      return tw`flex-col`;
    default:
      return;
  }
};

interface IFlex {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
}

/** flex box function */
const flex = ({ align, justify, direction }: IFlex) => {
  return [
    tw`flex`,
    alignSwitch(align),
    justifySwitch(justify),
    directionSwitch(direction),
  ].filter((x) => x !== null);
};

export default flex;
