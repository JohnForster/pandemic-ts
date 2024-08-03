import CityColour from '../types/enums/cityColour';

export const COLOURS = {
  yellow: '#F9DB6D',
  black: '#3C3C3B',
  blue: '#5867e9',
  red: '#AA0E13',
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
