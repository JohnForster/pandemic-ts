import Colour from './enums/colours';

export interface CityData {
  id: number;
  name: string;
  location: {
    x: number;
    y: number;
  };
  connections: any[];
  colour: Colour;
}

export interface CityState {
  data: CityData;
  infection: number;
  /* players: number[] */
}

export default interface GameState {
  cities: CityState[];
  /* players: PlayerData */
}
