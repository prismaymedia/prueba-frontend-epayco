import { createElement } from "react";

interface ITypography {
    text: string;
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    className?: string;
}

export const Typography = ({text, tag, className}: ITypography) => {
    return createElement(
        tag, 
        { className },
        text
    );
};
 
