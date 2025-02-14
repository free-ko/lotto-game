import { useReducer } from 'react';

import { lottoReducer } from '@/reducers';
import { calculateNumberFrequency, generateWinningDraw } from '@/utils';
import { INITIAL_LOTTO_STATE, LOTTO_ACTIONS_TYPE } from '@/constants';

const useLottoGame = () => {
  const [state, dispatch] = useReducer(lottoReducer, INITIAL_LOTTO_STATE);
  const numberFrequency = calculateNumberFrequency(state.tickets);

  const handlePurchaseLotto = (price: string) => {
    const priceNumber = parseInt(price, 10);

    dispatch({ type: LOTTO_ACTIONS_TYPE.PURCHASE, payload: priceNumber });
  };

  const handleCheckWinning = () => {
    const winningDraw = generateWinningDraw();
    dispatch({ type: LOTTO_ACTIONS_TYPE.CHECK_WINNING, payload: winningDraw });
  };

  const handleResetGame = () => {
    dispatch({ type: LOTTO_ACTIONS_TYPE.RESET });
  };

  return {
    numberFrequency,
    history: state.history,
    tickets: state.tickets,
    winningDraw: state.winningDraw,
    results: state.results,

    handlePurchaseLotto,
    handleCheckWinning,
    handleResetGame,
  };
};

export default useLottoGame;
