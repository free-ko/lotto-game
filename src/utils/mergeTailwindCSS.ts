import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 여러 클래스 이름을 받아 하나의 문자열로 병합합니다.
 * - clsx를 사용해 조건부 클래스들을 합치고,
 * - twMerge를 통해 Tailwind CSS의 충돌하는 유틸리티 클래스들을 병합합니다.
 *
 * @param inputs - ClassValue 타입의 인자들 (문자열, 객체, 배열 등)
 * @returns 병합된 클래스 이름 문자열
 */
export const mergeTailwindCSS = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
