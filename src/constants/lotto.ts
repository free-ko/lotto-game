import { type ILottoState } from '@/types';

export const INITIAL_LOTTO_STATE: ILottoState = {
  price: '',
  priceError: false,
  tickets: [],
  winningDraw: null,
  results: { '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0, 꽝: 0 },
  history: [],
};

export const LOTTO_ACTIONS_TYPE = {
  SET_PRICE: 'SET_PRICE',
  SET_ERROR: 'SET_ERROR',
  PURCHASE: 'PURCHASE',
  CHECK_WINNING: 'CHECK_WINNING',
  RESET: 'RESET',
} as const;
