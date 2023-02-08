/*******************  Types for Flex **************************/

export type Align = 'start' | 'end' | 'center' | undefined;

export type Justify = 'start' | 'end' | 'center' | 'between' | undefined;

export type Direction = 'row' | 'col' | undefined;

/*******************  Types for ClassName ********************/

export type TClassName = string;

/*******************  Types for darkClasses ******************/

export type TDarkClasses = string[];

/*******************  Types for transitionClass **************/

export type TTransitionClass = string[] | undefined;

/*******************  Types for position *********************/

export type TPosition = 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';

/*******************  Types for zIndex ***********************/

export type TZindex = 'z-0' | 'z-10' | 'z-20' | 'z-30' | 'z-40' | 'z-50';

/*******************  Types for grid *****************/

export type TGrid = string;

/*******************  Types for hover ***********************/

export type THover = string[] | undefined;

/*******************  Types for children *********************/

export type TChildren = React.ReactNode;

/*******************  Types for onClick **********************/

export type TOnClick = () => void;

/*******************  Types for darkClasses ******************/

export type TDarkProp = boolean;
