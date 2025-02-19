import { useReducer } from 'react';

import { LOTTO } from '@/constants';
import { lottoReducer } from '@/reducers';
import { calculateLottoNumberFrequency, generateWinningDraw } from '@/features';
import { useBooleanState } from '../shared';

const useLottoGame = () => {
  const [state, dispatch] = useReducer(lottoReducer, LOTTO.INITIAL_STATE);
  const numberFrequency = calculateLottoNumberFrequency(state.tickets);
  const [isShowStatistics, , hideStatistics, toggleIsStatistics] = useBooleanState(false);
  const [isShowHistories, , hideHistories, toggleIsShowHistories] = useBooleanState(false);

  const frequencyArray = Object.entries(numberFrequency)
    .map(([num, count]) => ({ number: Number(num), count }))
    .sort((a, b) => a.number - b.number);

  const lottoNumberFrequencyMaxCount = Math.max(...frequencyArray.map(item => item.count), 1);

  const handlePurchaseLotto = (price: string) => {
    const priceNumber = parseInt(price, 10);

    dispatch({ type: LOTTO.GAME_ACTIONS.PURCHASE, payload: priceNumber });
  };

  const handleCheckWinning = () => {
    const winningDraw = generateWinningDraw();
    dispatch({ type: LOTTO.GAME_ACTIONS.CHECK_WINNING, payload: winningDraw });
  };

  const handleResetGame = () => {
    dispatch({ type: LOTTO.GAME_ACTIONS.RESET });
    hideStatistics();
    hideHistories();
  };

  return {
    lottoNumberFrequencyMaxCount,
    isShowStatistics,
    frequencyArray,
    histories: state.histories,
    tickets: state.tickets,
    winningDraw: state.winningDraw,
    results: state.results,
    isShowHistories,

    handlePurchaseLotto,
    handleCheckWinning,
    handleResetGame,
    toggleIsStatistics,
    toggleIsShowHistories,
  };
};

export default useLottoGame;
