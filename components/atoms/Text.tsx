import React from 'react';

import {
    TClassName,
    TDarkClasses,
    TChildren,
    TOnClick,
    TTransitionClass,
    TPosition,
    TZindex,
} from '@/_types';

import { dark, transition, classCombine } from '@/lib';

interface DynamicTagProps {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'header';
    className?: string;
    onClick?: TOnClick;
    children?: TChildren;
    style?: {};
}

function DynamicTag({
    as: Tag,
    className,
    onClick,
    children,
}: DynamicTagProps) {
    return (
        <Tag className={className} onClick={onClick}>
            {children}
        </Tag>
    );
}

interface IText {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'header';
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

const Text = ({
    onClick,
    as,
    className,
    lightClasses,
    darkClasses,
    transitionClasses,
    positionClasses,
    zIndex,
    children,
    style,
}: IText) => {
    return (
        <DynamicTag
            as={as}
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
        </DynamicTag>
    );
};

export default Text;
