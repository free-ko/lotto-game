import type { IWinningDraw, Rank } from '@/types';
import { LOTTO_MAX_NUMBER, LOTTO_TICKET_COUNT } from '@/constants';

/**
 * 숫자 배열을 생성합니다.
 */
export const createNumberArray = (max: number = LOTTO_MAX_NUMBER): number[] => {
  return Array.from({ length: max }, (_, i) => i + 1);
};

/**
 * 주어진 배열을 무작위로 섞어 새로운 배열을 반환합니다.
 * 원본 배열은 변경하지 않습니다.
 * @param array - 섞을 배열
 */
export const shuffleArray = (array: number[]): number[] => {
  const copy = array.slice();
  return copy.sort(() => Math.random() - 0.5);
};

/**
 * 1부터 45까지의 숫자 배열을 생성한 후 무작위로 섞은 배열을 반환합니다.
 */
export const generateShuffledNumbers = (): number[] => {
  const numbers = createNumberArray();
  return shuffleArray(numbers);
};

/**
 * 로또 티켓 번호 생성: 1~45 중 무작위 6개 숫자를 오름차순 정렬하여 반환합니다.
 */
export const generateTicketNumbers = (): number[] => {
  return generateShuffledNumbers()
    .slice(0, LOTTO_TICKET_COUNT)
    .sort((a, b) => a - b);
};

/**
 * 당첨 번호 추첨 기능
 * - 당첨 번호: 6개 (오름차순 정렬)
 * - 보너스 번호: 7번째 번호
 */
export const generateWinningDraw = () => {
  const shuffledNumbers = generateShuffledNumbers();
  return {
    winningNumbers: shuffledNumbers.slice(0, 6).sort((a, b) => a - b),
    bonusNumber: shuffledNumbers[6],
  };
};

/**
 * 구매한 티켓들과 당첨 번호 정보를 바탕으로 당첨 결과를 계산합니다.
 * @param tickets - 구매한 티켓 배열 (각 티켓은 6개 숫자 배열)
 * @param winningDraw - 당첨 번호와 보너스 번호 정보
 * @returns 각 등수별 당첨 건수를 담은 객체
 */
export const calculateWinningResults = (
  tickets: number[][],
  winningDraw: IWinningDraw,
): Record<Rank, number> => {
  const results: Record<Rank, number> = {
    '1등': 0,
    '2등': 0,
    '3등': 0,
    '4등': 0,
    '5등': 0,
    꽝: 0,
  };

  const rankMap: Record<number, (isBonusMatched: boolean) => Rank> = {
    6: () => '1등',
    5: (isBonusMatched: boolean) => (isBonusMatched ? '2등' : '3등'),
    4: () => '4등',
    3: () => '5등',
  };

  tickets.forEach(ticket => {
    const matchCount = ticket.filter(num => winningDraw.winningNumbers.includes(num)).length;
    const isBonusMatched = ticket.includes(winningDraw.bonusNumber);
    const rank: Rank = rankMap[matchCount] ? rankMap[matchCount](isBonusMatched) : '꽝';

    results[rank]++;
  });

  return results;
};

/**
 * 구매한 티켓들의 번호 출현 빈도를 계산합니다.
 * @param tickets - 구매한 티켓 배열 (각 티켓은 6개 숫자 배열)
 * @returns 각 번호(1~45)의 출현 빈도를 담은 객체
 */
export const calculateNumberFrequency = (tickets: number[][]): Record<number, number> => {
  const frequency: Record<number, number> = {};
  for (let i = 1; i <= 45; i++) {
    frequency[i] = 0;
  }
  tickets.forEach(ticket => {
    ticket.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
  });
  return frequency;
};
