import { default as React } from '../../../node_modules/react';
import { BaseComponentProps } from '../../common/models';
import { ColorName } from '../../common/literalTypes';
export default interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, BaseComponentProps {
    as?: React.ElementType | undefined;
    [key: string]: any;
    colorName?: ColorName;
}
//# sourceMappingURL=LinkProps.d.ts.map