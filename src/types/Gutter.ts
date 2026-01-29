type Gutter =
  | `${number}rem`
  | number
  | {
      x?: `${number}rem` | number;
      y?: `${number}rem` | number;
    };

export default Gutter;
