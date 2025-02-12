import { useReducer } from 'react';

import { lottoReducer } from '@/reducers';
import { calculateNumberFrequency, generateWinningDraw } from '@/utils';
import { INITIAL_LOTTO_STATE, LOTTO_ACTIONS_TYPE } from '@/constants';

const useLotto = () => {
  const [state, dispatch] = useReducer(lottoReducer, INITIAL_LOTTO_STATE);
  const numberFrequency = calculateNumberFrequency(state.tickets);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: LOTTO_ACTIONS_TYPE.SET_PRICE, payload: e.target.value });
  };

  const handlePurchaseLotto = () => {
    const priceNumber = parseInt(state.price, 10);
    if (priceNumber % 1000 !== 0) {
      dispatch({ type: LOTTO_ACTIONS_TYPE.SET_ERROR, payload: true });
      return;
    }

    dispatch({ type: LOTTO_ACTIONS_TYPE.PURCHASE, payload: priceNumber });
  };

  const handleCheckWinning = () => {
    if (state.tickets.length === 0) {
      dispatch({ type: LOTTO_ACTIONS_TYPE.SET_ERROR, payload: true });
      return;
    }

    const winningDraw = generateWinningDraw();
    dispatch({ type: LOTTO_ACTIONS_TYPE.CHECK_WINNING, payload: winningDraw });
  };

  const handleReset = () => {
    dispatch({ type: LOTTO_ACTIONS_TYPE.RESET });
  };

  return {
    numberFrequency,
    history: state.history,
    price: state.price,
    priceError: state.priceError,
    tickets: state.tickets,
    winningDraw: state.winningDraw,
    results: state.results,
    handleChangePrice,
    handlePurchaseLotto,
    handleCheckWinning,
    handleReset,
  };
};

export default useLotto;
