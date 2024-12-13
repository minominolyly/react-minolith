import { default as MinolithCssVariable } from '../../common/models/MinolithCssVariable';
declare function getMinolithCssVariableStyles(cssVariableSetting?: MinolithCssVariable): string[];
declare function getRootStyles(cssVariableSetting?: MinolithCssVariable): string[];
declare function getLightSchemeStyles(cssVariableSetting?: MinolithCssVariable): string[];
declare function getDarkSchemeStyles(cssVariableSetting?: MinolithCssVariable): string[];
declare const minolithStyleUtility: {
    getMinolithCssVariableStyles: typeof getMinolithCssVariableStyles;
    getRootStyles: typeof getRootStyles;
    getLightSchemeStyles: typeof getLightSchemeStyles;
    getDarkSchemeStyles: typeof getDarkSchemeStyles;
};
export default minolithStyleUtility;
//# sourceMappingURL=minolithStyleUtility.d.ts.map