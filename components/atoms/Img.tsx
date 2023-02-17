import {
    TSrc,
    TAlt,
    TWidth,
    THeight,
    TLoading,
    TClassName,
    TDarkClasses,
    TOnClick,
    TTransitionClass,
    TPosition,
    TZindex,
} from '@/_types';
import { dark, transition, classCombine } from '@/lib';

interface IImg {
    src: TSrc;
    alt?: TAlt;
    width?: TWidth;
    height?: THeight;
    loading?: TLoading;
    onClick?: TOnClick;
    className?: TClassName;
    lightClasses?: TDarkClasses;
    darkClasses?: TDarkClasses;
    transitionClasses?: TTransitionClass;
    positionClasses?: TPosition;
    zIndex?: TZindex;
    style?: {};
}

const Img = ({
    src,
    alt,
    width,
    height,
    loading,
    onClick,
    className,
    lightClasses,
    darkClasses,
    transitionClasses,
    positionClasses,
    zIndex,
    style,
}: IImg) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            className={classCombine({
                transition: transition(transitionClasses),
                dark: dark(lightClasses, darkClasses),
                className,
                position: positionClasses,
                zIndex: zIndex,
            })}
            onClick={onClick}
            style={style}
        />
    );
};

export default Img;
