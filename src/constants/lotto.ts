import type { ILottoPurchaseFormState, ILottoState } from '@/types';

export const LOTTO = {
  INITIAL_PURCHASE_FORM_STATE: {
    price: '',
    hasPriceError: false,
  } as ILottoPurchaseFormState,

  INITIAL_STATE: {
    tickets: [],
    winningDraw: null,
    results: { '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0, 꽝: 0 },
    histories: [],
  } as ILottoState,

  GAME_ACTIONS: {
    RESET: 'RESET',
    PURCHASE: 'PURCHASE',
    CHECK_WINNING: 'CHECK_WINNING',
  } as const,

  PURCHASE_FORM_ACTIONS: {
    SET_PRICE: 'SET_PRICE',
    SET_ERROR: 'SET_PRICE_ERROR',
  } as const,

  CONFIG: {
    PURCHASE_UNIT: 1000,
    PRICE_UNIT: '원',
    MAX_NUMBER: 45,
    TICKET_COUNT: 6,
    STATISTICS_MAX_BAR_HEIGHT: 150,
  },
};
