import { LOTTO_MAX_NUMBER } from '@/constants';

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
