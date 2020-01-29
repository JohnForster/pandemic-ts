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
  infection: number;
}

export interface Connection {
  id: number;
  fromId: number;
  toId: number;
}
export interface BoardData {
  // imagePath: string;
  // heightRatio: number;
  cities: CityData[];
  connections: Connection[];
}

export interface CityState {
  // data: CityData;
  infection: number;
  /* players: number[] */
}

// enum Role {}
// export interface Player {
//   id: number;
//   colour: number;
//   role: Role;
//   locationId: number;
//   name: string;
//   /* moveHistory: Move[] */
// }

export default interface GameState {
  // turnNumber: number;
  // currentPlayerId: number;
  cities: CityState[];
  // players: Player[];
  /* players: PlayerData */
}
