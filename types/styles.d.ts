type ColorName =
  | 'primary'
  | 'inverse-primary'
  | 'on-primary'
  | 'disabled'
  | 'on-surface'
  | 'text';
type ColorType = 'bg' | 'text' | 'border' | 'border-top' | 'fill';
export type Color = `${ColorName}-color-${ColorType}`;
