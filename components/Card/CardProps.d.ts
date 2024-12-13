import { default as React } from '../../../node_modules/react';
import { ColorName } from '../../common/literalTypes';
import { DivProps } from '../Div';
export default interface CardProps extends DivProps {
    colorName?: ColorName;
    as?: React.ElementType | undefined;
    [key: string]: any;
}
//# sourceMappingURL=CardProps.d.ts.map