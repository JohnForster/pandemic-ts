import GameState from './gameData';

export enum ActionType {
  INCREMENT_CITY = 'INCREMENT_CITY',
  DECREMENT_CITY = 'DECREMENT_CITY',
  MOVE_PLAYER = 'MOVE_PLAYER',
  SELECT_PAWN = 'SELECT_PAWN',
  SELECT_CITY = 'SELECT_CITY',
  TOGGLE_DEV = 'TOGGLE_DEV',
  TOGGLE_DEV_FUNCTION = 'TOGGLE_DEV_FUNCTION',
  LOAD = 'LOAD',
  CHANGE_NAME = 'CHANGE_NAME',
  NEXT_PLAYER = 'NEXT_PLAYER',
}
export type Action =
  | IncrementAction
  | DecrementAction
  | MovePlayerAction
  | SelectPawnAction
  | SelectCityAction
  | ToggleDevAction
  | ToggleDevFunction
  | LoadAction
  | ChangeNameAction
  | NextPlayerAction;

export interface GenericAction {
  type: ActionType;
  payload?: { [key: string]: unknown };
  error?: boolean;
  meta?: unknown;
}

export interface IncrementAction extends GenericAction {
  type: ActionType.INCREMENT_CITY;
  payload: { id: string };
}

export interface DecrementAction extends GenericAction {
  type: ActionType.DECREMENT_CITY;
  payload: { id: string };
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

export interface ToggleDevAction extends GenericAction {
  type: ActionType.TOGGLE_DEV;
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
