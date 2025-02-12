import type { ILottoState, LottoAction } from '@/types';
import { calculateWinningResults, generateTicketNumbers } from '@/utils';
import { INITIAL_LOTTO_STATE, LOTTO_ACTIONS_TYPE } from '@/constants';

const lottoReducer = (state: ILottoState, action: LottoAction): ILottoState => {
  switch (action.type) {
    case LOTTO_ACTIONS_TYPE.SET_PRICE:
      return { ...state, price: action.payload, priceError: false };

    case LOTTO_ACTIONS_TYPE.SET_ERROR:
      return { ...state, priceError: action.payload };

    case LOTTO_ACTIONS_TYPE.PURCHASE: {
      const ticketCount = action.payload / 1000;
      const newTickets = Array.from({ length: ticketCount }, () => generateTicketNumbers());
      return { ...state, tickets: [...state.tickets, ...newTickets], price: '' };
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

      return { ...state, winningDraw, results, history: [...state.history, newRecord] };
    }

    case LOTTO_ACTIONS_TYPE.RESET:
      return INITIAL_LOTTO_STATE;

    default:
      return state;
  }
};

export default lottoReducer;
