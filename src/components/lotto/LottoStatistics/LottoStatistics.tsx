import { useState } from 'react';

import { Button } from '@/components';

interface IStatisticsSectionProps {
  numberFrequency: Record<number, number>;
}

const MAX_BAR_HEIGHT = 150;

const StatisticsSection = ({ numberFrequency }: IStatisticsSectionProps) => {
  const [isShowStatistics, setIsShowStatistics] = useState<boolean>(false);

  const frequencyArray = Object.entries(numberFrequency)
    .map(([num, count]) => ({ number: Number(num), count }))
    .sort((a, b) => a.number - b.number);

  const maxCount = Math.max(...frequencyArray.map(item => item.count), 1);

  return (
    <>
      <Button className="mt-4 w-full" onClick={() => setIsShowStatistics(prev => !prev)}>
        통계 보기
      </Button>

      {isShowStatistics && (
        <div className="mt-4">
          <h2 className="mb-2 text-center text-lg font-semibold">번호 출현 빈도</h2>
          <div className="overflow-x-auto">
            <div className="relative h-[200px] border-t border-gray-300 px-2">
              <div className="absolute right-0 bottom-0 left-0 flex items-end space-x-2">
                {frequencyArray.map(({ number, count }) => {
                  const barHeight = (count / maxCount) * MAX_BAR_HEIGHT;
                  return (
                    <div key={number} className="flex flex-col items-center">
                      <span className="text-xs text-gray-600">{count}</span>
                      <div
                        className="w-4 rounded bg-blue-500"
                        style={{ height: `${barHeight}px` }}
                      />
                      <span className="mt-1 text-xs text-gray-700">{number}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StatisticsSection;
