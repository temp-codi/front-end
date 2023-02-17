import { TDarkClasses } from '@/_types';

interface IDark {
    (lightClasses?: TDarkClasses, darkClasses?: TDarkClasses): string;
}

const dark: IDark = (lightClasses, darkClasses) => {
    let newClasses = '';
    const lightString = lightClasses?.join(' ');
    if (lightString) {
        newClasses += lightString + ' ';
    }
    const darkString = darkClasses?.join(' ');
    if (darkString) {
        newClasses += darkString + ' ';
    }

    return newClasses;
};

export default dark;
