import { default as React } from '../../../node_modules/react';
import { ColorLightness, ColorName } from '../../common/literalTypes';
import { BaseComponentProps } from '../../common/models';
export default interface StripeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BaseComponentProps {
    patternColor?: {
        name: ColorName;
        lightness: ColorLightness;
    } | undefined;
}
//# sourceMappingURL=StripeProps.d.ts.map