export type Rank = '1등' | '2등' | '3등' | '4등' | '5등' | '꽝';

export interface IWinningDraw {
  winningNumbers: number[];
  bonusNumber: number;
}

export interface ILottoHistoryRecord {
  tickets: number[][];
  winningDraw: IWinningDraw;
  results: Record<Rank, number>;
  timestamp: number;
}

export interface ILottoPurchaseFormState {
  price: string;
  hasPriceError: boolean;
}

export interface ILottoState {
  tickets: number[][];
  winningDraw: IWinningDraw | null;
  results: Record<Rank, number>;
  histories: ILottoHistoryRecord[];
}

export type LottoAction =
  | { type: 'PURCHASE'; payload: number }
  | { type: 'CHECK_WINNING'; payload: IWinningDraw }
  | { type: 'RESET' };

export type LottoPurchaseFormAction =
  | { type: 'SET_PRICE'; payload: string }
  | { type: 'SET_PRICE_ERROR'; payload: boolean };
