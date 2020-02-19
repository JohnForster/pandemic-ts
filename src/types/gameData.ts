import CityColour from './enums/cityColour';
import PawnColour from './enums/pawnColour';

export interface CityData {
  id: string;
  name: string;
  location: {
    x: number;
    y: number;
  };
  connections: string[];
  colour: CityColour;
}

export interface CityState {
  infection: number;
}

export interface Connection {
  id: string;
  fromId: string;
  toId: string;
}
export interface BoardData {
  // imagePath: string;
  // heightRatio: number;
  cities: { [id: string]: CityData };
  connections: { [id: string]: Connection };
}

export interface CityState {
  id: string;
  // data: CityData;
  infection: number;
  /* players: number[] */
}

// enum Role {}

export interface Player {
  id: string;
  colour: PawnColour;
  // role: Role;
  locationId: string;
  name: string;
  /* moveHistory: Move[] */
}

export default interface GameState {
  // turnNumber: number;
  // currentPlayerId: string;
  cities: { [id: string]: CityState }; // add id to CityState?
  players: { [id: string]: Player };
  devMode: boolean;
  /* players: PlayerData */
}

// // Normalised state:
// enum Role {}
// interface newGameState {
//   cities: { [id: string]: { id: string; infection: number } };
//   players: {
//     [id: string]: {
//       id: string;
//       currentCityId: string;
//       role: Role;
//       name: string;
//       colour: PawnColour;
//     };
//   };
//   devMode: boolean;
// }
