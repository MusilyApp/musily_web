export type TypographType = 'display' | 'headline' | 'title' | 'body' | 'label';
export type TypographSize = 'large' | 'medium' | 'small';
export type TypographWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type Typograph =
  | `${TypographType}-${TypographSize}`
  | `${TypographType}-${TypographSize}-${TypographWeight}`;

export type TextOverflow = 'ellipsis';
