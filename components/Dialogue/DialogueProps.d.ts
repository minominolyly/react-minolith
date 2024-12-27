import { default as React } from '../../../node_modules/react';
import { BorderStyle, BorderWidth, ColorName } from '../../common/literalTypes';
import { DivProps } from '../Div';
export default interface DialogueProps extends DivProps {
    colorName?: ColorName;
    as?: React.ElementType | undefined;
    [key: string]: any;
    avatarSize?: "large" | "small";
    borderStyle?: BorderStyle;
    borderWidth?: BorderWidth;
    isAvatarCircle?: boolean;
    isRight?: boolean;
}
//# sourceMappingURL=DialogueProps.d.ts.map