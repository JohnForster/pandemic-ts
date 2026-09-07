import CityColour from './enums/cityColour';
import GameState from './gameData';

export enum ActionType {
  INCREMENT_CITY = 'INCREMENT_CITY',
  DECREMENT_CITY = 'DECREMENT_CITY',
  MOVE_PLAYER = 'MOVE_PLAYER',
  SELECT_PAWN = 'SELECT_PAWN',
  SELECT_CITY = 'SELECT_CITY',
  DEV_MODE_ON = 'DEV_MODE_ON',
  DEV_MODE_OFF = 'DEV_MODE_OFF',
  TOGGLE_DEV_FUNCTION = 'TOGGLE_DEV_FUNCTION',
  LOAD = 'LOAD',
  CHANGE_NAME = 'CHANGE_NAME',
  NEXT_PLAYER = 'NEXT_PLAYER',
  PREVIOUS_PLAYER = 'PREVIOUS_PLAYER',
  RESET = 'RESET',
  SELECT_COLOUR = 'SELECT_COLOUR',
  TOGGLE_RESEARCH_STATION = 'TOGGLE_RESEARCH_STATION',
  INCREMENT_OUTBREAKS = 'INCREMENT_OUTBREAKS',
  DECREMENT_OUTBREAKS = 'DECREMENT_OUTBREAKS',
  CHANGE_CITY_LOCATION = 'CHANGE_CITY_LOCATION',
  CHANGE_CITY_COLOUR = 'CHANGE_CITY_COLOUR',
  CREATE_ROUTE = 'CREATE_ROUTE',
  REMOVE_ROUTE = 'REMOVE_ROUTE',
}
export type Action =
  | IncrementAction
  | DecrementAction
  | MovePlayerAction
  | SelectPawnAction
  | SelectCityAction
  | EnableDevModeAction
  | DisableDevModeAction
  | ToggleDevFunction
  | LoadAction
  | ChangeNameAction
  | NextPlayerAction
  | PreviousPlayerAction
  | ResetAction
  | SelectColourAction
  | ToggleResearchStationAction
  | IncrementOutbreaksAction
  | DecrementOutbreaksAction
  | ChangeCityLocationAction
  | ChangeCityColourAction
  | CreateRouteAction
  | RemoveRouteAction;

export interface GenericAction {
  type: ActionType;
  payload?: { [key: string]: unknown };
  error?: boolean;
  meta?: unknown;
}

export interface IncrementAction extends GenericAction {
  type: ActionType.INCREMENT_CITY;
  payload: { id: string; colour: CityColour };
}

export interface DecrementAction extends GenericAction {
  type: ActionType.DECREMENT_CITY;
  payload: { id: string; colour: CityColour };
}

export interface MovePlayerAction extends GenericAction {
  type: ActionType.MOVE_PLAYER;
  payload: { playerId: string; cityId: string };
}

export interface SelectPawnAction extends GenericAction {
  type: ActionType.SELECT_PAWN;
  payload: { id: string };
}

export interface SelectCityAction extends GenericAction {
  type: ActionType.SELECT_CITY;
  payload: { id: string };
}

export interface ToggleDevFunction extends GenericAction {
  type: ActionType.TOGGLE_DEV_FUNCTION;
  payload: { function: keyof GameState['devToggles'] };
}

export interface LoadAction extends GenericAction {
  type: ActionType.LOAD;
}

export interface ChangeNameAction extends GenericAction {
  type: ActionType.CHANGE_NAME;
  payload: { playerId: string; name: string };
}
export interface NextPlayerAction extends GenericAction {
  type: ActionType.NEXT_PLAYER;
}
export interface PreviousPlayerAction extends GenericAction {
  type: ActionType.PREVIOUS_PLAYER;
}

export interface ResetAction extends GenericAction {
  type: ActionType.RESET;
}

export interface EnableDevModeAction extends GenericAction {
  type: ActionType.DEV_MODE_ON;
}

export interface DisableDevModeAction extends GenericAction {
  type: ActionType.DEV_MODE_OFF;
}

export interface SelectColourAction extends GenericAction {
  type: ActionType.SELECT_COLOUR;
  payload: { colour: CityColour };
}

export interface ToggleResearchStationAction extends GenericAction {
  type: ActionType.TOGGLE_RESEARCH_STATION;
  payload: { id: string };
}

export interface IncrementOutbreaksAction extends GenericAction {
  type: ActionType.INCREMENT_OUTBREAKS;
}

export interface DecrementOutbreaksAction extends GenericAction {
  type: ActionType.DECREMENT_OUTBREAKS;
}

export interface ChangeCityLocationAction extends GenericAction {
  type: ActionType.CHANGE_CITY_LOCATION;
  payload: { id: string; x: number; y: number };
}

export interface ChangeCityColourAction extends GenericAction {
  type: ActionType.CHANGE_CITY_COLOUR;
  payload: { id: string };
}

export interface CreateRouteAction extends GenericAction {
  type: ActionType.CREATE_ROUTE;
  payload: { id1: string; id2: string };
}

export interface RemoveRouteAction extends GenericAction {
  type: ActionType.REMOVE_ROUTE;
  payload: { id: string };
}
