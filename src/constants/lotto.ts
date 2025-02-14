import type { ILottoPurchaseFormState, ILottoState } from '@/types';

export const INITIAL_LOTTO_PURCHASE_FORM_STATE: ILottoPurchaseFormState = {
  price: '',
  hasPriceError: false,
};

export const INITIAL_LOTTO_STATE: ILottoState = {
  tickets: [],
  winningDraw: null,
  results: { '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0, 꽝: 0 },
  histories: [],
};

export const LOTTO_ACTIONS_TYPE = {
  RESET: 'RESET',
  PURCHASE: 'PURCHASE',
  CHECK_WINNING: 'CHECK_WINNING',
} as const;

export const LOTTO_PURCHASE_FORM_TYPE = {
  SET_PRICE: 'SET_PRICE',
  SET_ERROR: 'SET_PRICE_ERROR',
} as const;
