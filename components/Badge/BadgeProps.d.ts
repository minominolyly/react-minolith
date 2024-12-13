import { ColorName } from '../../common/literalTypes';
import { BaseComponentProps } from '../../common/models';
import { default as React } from '../../../node_modules/react';
export default interface BadgeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, BaseComponentProps {
    colorName?: ColorName;
    isSmall?: boolean;
    as?: React.ElementType | undefined;
    [key: string]: any;
}
//# sourceMappingURL=BadgeProps.d.ts.map