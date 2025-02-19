/**
 * 주어진 배열을 무작위로 섞어 새로운 배열을 반환합니다.
 * 원본 배열은 변경하지 않습니다.
 * @param array - 섞을 배열
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = Array.from(array);

  let currentIndex = newArray.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};

/**
 * count개 까지의 숫자 배열을 생성한 후 무작위로 섞은 배열을 반환합니다.
 */
export const generateShuffledNumbers = ({ count }: { count: number }): number[] => {
  const numberArray = Array.from({ length: count }, (_, i) => i + 1);

  return shuffleArray(numberArray);
};
