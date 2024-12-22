import { default as React } from '../../../node_modules/react';
import { ColorName } from '../../common/literalTypes';
import { DivProps } from '../Div';
export default interface DialogueProps extends DivProps {
    colorName?: ColorName;
    as?: React.ElementType | undefined;
    [key: string]: any;
    isAvatarRight?: boolean;
}
//# sourceMappingURL=DialogueProps.d.ts.map