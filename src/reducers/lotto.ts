import type {
  ILottoState,
  LottoAction,
  LottoPurchaseFormAction,
  ILottoPurchaseFormState,
} from '@/types';
import { LOTTO } from '@/constants';
import { calculateWinningResults, generateTicketNumbers } from '@/features';

export const lottoPurchaseFromReducer = (
  state: ILottoPurchaseFormState,
  action: LottoPurchaseFormAction,
): ILottoPurchaseFormState => {
  switch (action.type) {
    case LOTTO.PURCHASE_FORM_ACTIONS.SET_PRICE:
      return { ...state, price: action.payload, hasPriceError: false };

    case LOTTO.PURCHASE_FORM_ACTIONS.SET_ERROR:
      return { ...state, hasPriceError: action.payload };

    default:
      return state;
  }
};

export const lottoReducer = (state: ILottoState, action: LottoAction): ILottoState => {
  switch (action.type) {
    case LOTTO.GAME_ACTIONS.PURCHASE: {
      const ticketCount = action.payload / LOTTO.CONFIG.PURCHASE_UNIT;
      const newTickets = Array.from({ length: ticketCount }, () => generateTicketNumbers());
      return { ...state, tickets: [...state.tickets, ...newTickets] };
    }

    case LOTTO.GAME_ACTIONS.CHECK_WINNING: {
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

    case LOTTO.GAME_ACTIONS.RESET:
      return LOTTO.INITIAL_STATE;

    default:
      return state;
  }
};
