export const CITY_COLOURS = ['blue', 'yellow', 'black', 'red'] as const;
type CityColour = typeof CITY_COLOURS[number];

export default CityColour;
