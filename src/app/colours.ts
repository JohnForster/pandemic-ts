import CityColour from '../types/enums/cityColour';

export const COLOURS = {
  yellow: '#F9DB6D',
  black: '#3C3C3B',
  blue: '#5867e9',
  red: '#AA0E13',
};

export const getRgb = (colour: CityColour): string => {
  switch (colour) {
    case CityColour.Yellow:
      return COLOURS.yellow;
    case CityColour.Black:
      return COLOURS.black;
    case CityColour.Blue:
      return COLOURS.blue;
    case CityColour.Red:
      return COLOURS.red;
  }
};
