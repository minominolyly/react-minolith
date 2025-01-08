import { BaseComponentProps } from '../../common/models';
import { default as React } from '../../../node_modules/react';
import { ColorName } from '../../react-minolith';
export default interface BlockquoteProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, BaseComponentProps {
    colorName?: ColorName;
    isItalic?: boolean;
    hasQuote?: boolean | {
        before?: boolean;
        after?: boolean;
    };
}
//# sourceMappingURL=BlockquoteProps.d.ts.map