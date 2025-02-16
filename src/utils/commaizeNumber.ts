/**
 * 숫자 또는 숫자로 변환 가능한 문자열에 3자리마다 콤마(,)를 추가하는 함수
 *
 * @param {string | number} value - 숫자 또는 숫자로 변환할 수 있는 문자열
 * @returns {string} - 콤마가 추가된 문자열 (숫자가 아닌 값은 그대로 반환)
 *
 * @example
 * commaizeNumber(1234567);        // "1,234,567"
 * commaizeNumber("4500000.75");   // "4,500,000.75"
 * commaizeNumber(-987654.321);    // "-987,654.321"
 * commaizeNumber("abc");          // "abc" (숫자가 아닌 경우 그대로 반환)
 * commaizeNumber(null);           // "" (빈 문자열 반환)
 */
export const commaizeNumber = (value: string | number): string => {
  // 값이 `null`, `undefined`, 또는 빈 문자열이면 빈 문자열 반환
  if (value === null || value === undefined || value === '') return '';

  // 숫자로 변환 (숫자로 변환할 수 없는 값은 그대로 반환)
  const num = Number(value);
  if (isNaN(num)) return String(value);

  // 숫자를 문자열로 변환하고 정수부 / 소수 분리
  const numStr = String(num);
  const [integerPart, decimalPart] = numStr.split('.');

  // 3자리마다 콤마(,)를 추가하는 정규식
  const commaizeRegExp = /(\d)(?=(\d{3})+(?!\d))/g;

  // 정수부에 콤마 추가 후, 소수가 있으면 결합하여 반환
  return decimalPart !== undefined
    ? integerPart.replace(commaizeRegExp, '$1,') + '.' + decimalPart
    : integerPart.replace(commaizeRegExp, '$1,');
};
