import { styled } from "twin.macro";
import {
  Align,
  Justify,
  Direction,
  TClassName,
  TDarkClasses,
  TChildren,
  TOnClick,
  TTransitionClass,
  TPosition,
  TZindex,
} from "@/_types";
import { flex, dark, transition, classCombine } from "@/lib";

interface FlexProps {
  onClick?: TOnClick;
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  positionClasses?: TPosition;
  zIndex?: TZindex;
  children?: TChildren;
  style?: {};
}
interface ContainerProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
}

const Flex = ({
  onClick,
  align,
  justify,
  direction,
  className,
  lightClasses,
  darkClasses,
  transitionClasses,
  positionClasses,
  zIndex,
  children,
  style,
}: FlexProps) => {
  return (
    <Container
      align={align}
      justify={justify}
      direction={direction}
      className={classCombine({
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
    </Container>
  );
};

const Container = styled.div(
  ({ align, justify, direction }: ContainerProps) => [
    ...flex({ align, justify, direction }),
  ]
);

export default Flex;
