import { ColorName } from '../../common/literalTypes';
import { BaseComponentProps } from '../../common/models';
import { default as React } from '../../../node_modules/react';
export default interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, BaseComponentProps {
    colorName?: ColorName;
    isSticky?: boolean | undefined;
}
//# sourceMappingURL=HeaderProps.d.ts.map