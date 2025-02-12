import { useLotto } from '@/hooks';
import { Button, LottoHistory, LottoPurchase, LottoResult, LottoStatistics } from '@/components';

import './index.css';

function App() {
  const {
    price,
    results,
    tickets,
    priceError,
    winningDraw,
    history,
    numberFrequency,
    handleReset,
    handleChangePrice,
    handleCheckWinning,
    handlePurchaseLotto,
  } = useLotto();

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <section className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">로또 어플리케이션</h1>
        <LottoPurchase
          price={price}
          tickets={tickets}
          priceError={priceError}
          onPurchase={handlePurchaseLotto}
          onPriceChange={handleChangePrice}
        />

        <LottoResult
          results={results}
          winningDraw={winningDraw}
          onCheckWinning={handleCheckWinning}
        />

        <LottoHistory history={history} />

        <LottoStatistics numberFrequency={numberFrequency} />

        <Button className="mt-4 mb-4 w-full" size="lg" onClick={handleReset}>
          처음부터 다시하기
        </Button>
      </section>
    </main>
  );
}

export default App;
