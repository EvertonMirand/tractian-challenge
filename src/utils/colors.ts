import tinycolor from 'tinycolor2';

export const darkenColor = (color: string, amount: number): string => {
  return tinycolor(color).darken(amount).toString();
};
