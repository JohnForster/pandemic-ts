import { useContext } from 'react';
import type { MouseEvent } from 'react';
import GameStateContext from '../contexts/gameStateContext';
import { ActionType } from '../../types/actions';

export const usePawnClick = () => {
  const [gameState, dispatch] = useContext(GameStateContext);

  return (id: string) => (e: MouseEvent): void => {
    e.stopPropagation();
    if (id === gameState.selectedPawnId)
      return dispatch({ type: ActionType.SELECT_PAWN, payload: { id: null } });
    dispatch({ type: ActionType.SELECT_PAWN, payload: { id } });
  };
};
