import { useState } from 'react';

import type { IWinningDraw, Rank } from '@/types';
import { Button } from '@/components';

interface ILottoHistory {
  tickets: number[][];
  winningDraw: IWinningDraw;
  results: Record<Rank, number>;
  timestamp: number;
}

interface ILottoHistoryProps {
  histories: ILottoHistory[];
}

const LottoHistory = ({ histories }: ILottoHistoryProps) => {
  const [isShowHistory, setIsShowHistory] = useState<boolean>(false);

  return (
    <>
      <Button className="w-full" onClick={() => setIsShowHistory(prev => !prev)}>
        당첨기록 보기
      </Button>

      {isShowHistory && (
        <div className="mt-4">
          <h2 className="mb-4 text-center text-2xl font-bold">과거 당첨 기록</h2>
          {histories.length === 0 ? (
            <div className="text-center text-gray-500">기록이 없습니다.</div>
          ) : (
            <div className="space-y-6">
              {histories.map((history, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow">
                  <div className="mb-2 flex items-center justify-between border-b pb-2">
                    <span className="text-sm text-gray-700">
                      {new Date(history.timestamp).toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">기록 #{index + 1}</span>
                  </div>
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">구매 티켓</h3>
                    <div className="mt-1 space-y-1">
                      {history.tickets.map((ticket, i) => (
                        <p key={i} className="text-sm text-gray-600">
                          {ticket.join(', ')}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">당첨 번호 / 보너스 번호</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {history.winningDraw.winningNumbers.join(', ')}
                      <span className="ml-2 font-bold text-blue-500">
                        보너스: {history.winningDraw.bonusNumber}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">당첨 결과</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      1등: {history.results['1등']}개, 2등: {history.results['2등']}개, 3등:{' '}
                      {history.results['3등']}개, 4등: {history.results['4등']}개, 5등:{' '}
                      {history.results['5등']}개, 꽝: {history.results['꽝']}개
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LottoHistory;
