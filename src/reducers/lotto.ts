import type {
  ILottoState,
  LottoAction,
  LottoPurchaseFormAction,
  ILottoPurchaseFormState,
} from '@/types';
import { calculateWinningResults, generateTicketNumbers } from '@/utils';
import { INITIAL_LOTTO_STATE, LOTTO_ACTIONS_TYPE, LOTTO_PURCHASE_FORM_TYPE } from '@/constants';

export const lottoPurchaseFromReducer = (
  state: ILottoPurchaseFormState,
  action: LottoPurchaseFormAction,
): ILottoPurchaseFormState => {
  switch (action.type) {
    case LOTTO_PURCHASE_FORM_TYPE.SET_PRICE:
      return { ...state, price: action.payload, hasPriceError: false };

    case LOTTO_PURCHASE_FORM_TYPE.SET_ERROR:
      return { ...state, hasPriceError: action.payload };

    default:
      return state;
  }
};

export const lottoReducer = (state: ILottoState, action: LottoAction): ILottoState => {
  switch (action.type) {
    case LOTTO_ACTIONS_TYPE.PURCHASE: {
      const ticketCount = action.payload / 1000;
      const newTickets = Array.from({ length: ticketCount }, () => generateTicketNumbers());
      return { ...state, tickets: [...state.tickets, ...newTickets] };
    }

    case LOTTO_ACTIONS_TYPE.CHECK_WINNING: {
      const winningDraw = action.payload;
      const results = calculateWinningResults(state.tickets, winningDraw);
      const newRecord = {
        tickets: state.tickets,
        winningDraw,
        results,
        timestamp: Date.now(),
      };

      return { ...state, winningDraw, results, histories: [...state.histories, newRecord] };
    }

    case LOTTO_ACTIONS_TYPE.RESET:
      return INITIAL_LOTTO_STATE;

    default:
      return state;
  }
};
