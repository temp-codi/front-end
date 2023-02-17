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

/*******************  Interfacec for location ******************/

export interface Ilocation {
    lat: string;
    lon: string;
}

/*******************  Interfacec for googleImg ******************/

export interface IGoogleImg {
    keyword: string | string[];
    pageNo: number;
    gender: string;
}
/*******************  Interfacec for googleImg ******************/

export interface IGoogleImgInfo {
    googleInfo: {
        // Add the properties you need for the `googleInfo` object
        img: string[];
    };
}

export type IGoogleImgArr = any;

/*******************  types for img ******************/
export type TSrc = any;
export type TAlt = string;
export type TWidth = number | undefined;
export type THeight = number | undefined;
export type TLoading = 'lazy';

/******  types for individual weather Data inside array *******/
export interface IWeatherData {
    cloud_in_percentage: number;
    dt: number;
    feels_like: number;
    humidity: number;
    temp: number;
    weather_id: number;
    wind_speed: number;
    _id: string;
}
/******  types for forecast weather Data *******/
export interface ITemperatureData {
    current: number;
    next5Days: Array<{ averageTemperature: number; weatherId: number }>;
}
