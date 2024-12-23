import { ColorName } from '../../common/literalTypes';
import { DivProps } from '../Div';
export default interface MessageProps extends DivProps {
    colorName?: ColorName;
    as?: React.ElementType | undefined;
    [key: string]: any;
}
//# sourceMappingURL=MessageProps.d.ts.map