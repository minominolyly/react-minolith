export default interface SpacingProps {
  margin?:
    | {
        x?: number | string;
        y?: number | string;
        top?: number | string;
        left?: number | string;
        bottom?: number | string;
        right?: number | string;
      }
    | number
    | string;
  padding?:
    | {
        x?: number | string;
        y?: number | string;
        top?: number | string;
        left?: number | string;
        bottom?: number | string;
        right?: number | string;
      }
    | number
    | string;
}
