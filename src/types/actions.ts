export enum ActionType {
  INCREMENT_CITY = 'INCREMENT_CITY',
  DECREMENT_CITY = 'DECREMENT_CITY',
  MOVE_PLAYER = 'MOVE_PLAYER',
}
export type Action = IncrementAction | DecrementAction | MovePlayerAction;

interface GenericAction {
  type: ActionType;
  payload: { [key: string]: unknown };
  error?: boolean;
  meta?: unknown;
}

interface IncrementAction extends GenericAction {
  type: ActionType.INCREMENT_CITY;
  payload: { id: string };
}

interface DecrementAction extends GenericAction {
  type: ActionType.DECREMENT_CITY;
  payload: { id: string };
}

interface MovePlayerAction extends GenericAction {
  type: ActionType.MOVE_PLAYER;
  payload: { playerId: string; cityId: string };
}
