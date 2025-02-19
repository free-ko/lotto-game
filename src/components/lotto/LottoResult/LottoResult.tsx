import type { IWinningDraw, Rank } from '@/types';

interface ILottoResultProps {
  winningDraw: IWinningDraw;
  results: Record<Rank, number>;
}

const LottoResult = ({ winningDraw, results }: ILottoResultProps) => {
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-lg font-semibold">당첨 번호</h2>
      <p className="mb-4 rounded bg-yellow-100 p-2">
        {winningDraw.winningNumbers.join(', ')}{' '}
        <span className="font-semibold">+{winningDraw.bonusNumber}</span>
      </p>
      <h3 className="mb-2 text-lg font-semibold">당첨 결과</h3>
      <ul className="space-y-1">
        <li>1등: {results['1등']}개</li>
        <li>2등: {results['2등']}개</li>
        <li>3등: {results['3등']}개</li>
        <li>4등: {results['4등']}개</li>
        <li>5등: {results['5등']}개</li>
        <li>꽝: {results['꽝']}개</li>
      </ul>
    </div>
  );
};

export default LottoResult;
