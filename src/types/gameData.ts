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
  colour?: CityColour;
  hidden?: boolean;
}

export interface Connection {
  id: string;
  fromId: string;
  toId: string;
  dotted?: boolean;
}
export interface BoardData {
  // * imagePath: string;
  // * heightRatio: number;
  cities: { [id: string]: CityData };
  connections: { [id: string]: Connection };
}

export interface CityState {
  id: string;
  infection: {
    blue: number;
    yellow: number;
    black: number;
    red: number;
  };
}

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
  currentPlayerId: string;
  devToggles: {
    changeLocation: boolean;
    changeColour: boolean;
    createRoutes: boolean;
    removeRoutes: boolean;
  };
  selectedCityId: string;
  selectedPawnId: string;
  cities: { [id: string]: CityState }; // add id to CityState?
  players: { [id: string]: Player };
  devMode: boolean;
}
