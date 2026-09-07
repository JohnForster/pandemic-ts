import CityColour from '../types/enums/cityColour';

export const COLOURS = {
  yellow: '#F9DB6D',
  black: '#3C3C3B',
  blue: '#5867e9',
  red: '#AA0E13',
};

// Exposed via styled-components' ThemeProvider (see app/theme.ts) so new
// components can pull colours from `props.theme` instead of importing this
// module directly.
export const theme = {
  colours: COLOURS,
};

export const getRgb = (colour: CityColour): string => {
  switch (colour) {
    case 'yellow':
      return COLOURS.yellow;
    case 'black':
      return COLOURS.black;
    case 'blue':
      return COLOURS.blue;
    case 'red':
      return COLOURS.red;
  }
};

// Shared infection-level -> warning colour scale, used anywhere a city's
// infection count needs to be flagged visually (e.g. approaching an outbreak).
export const getSeverityColour = (infectionLevel: number): string => {
  switch (infectionLevel) {
    case 2:
      return 'gold';
    case 3:
      return 'orange';
    case 4:
      return 'red';
    default:
      return '';
  }
};
