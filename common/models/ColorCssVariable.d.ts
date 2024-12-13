import { default as Gradation } from './Gradation';
import { default as Oklch } from './Oklch';
import { default as SchemeColor } from './SchemeColor';
export default interface ColorCssVariable {
    white?: Oklch | string | undefined;
    black?: Oklch | string | undefined;
    gray?: Gradation | undefined;
    red?: Gradation | undefined;
    orange?: Gradation | undefined;
    yellow?: Gradation | undefined;
    green?: Gradation | undefined;
    cyan?: Gradation | undefined;
    blue?: Gradation | undefined;
    violet?: Gradation | undefined;
    magenta?: Gradation | undefined;
    light?: SchemeColor | undefined;
    dark?: SchemeColor | undefined;
}
//# sourceMappingURL=ColorCssVariable.d.ts.map