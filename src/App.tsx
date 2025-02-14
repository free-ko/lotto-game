import { useLottoPurchaseForm, useLottoGame } from '@/hooks';
import { Button, LottoHistory, LottoPurchase, LottoResult, LottoStatistics } from '@/components';

import './index.css';

function App() {
  const {
    results,
    tickets,
    winningDraw,
    histories,
    numberFrequency,
    handleResetGame,
    handleCheckWinning,
    handlePurchaseLotto,
  } = useLottoGame();

  const { price, hasPriceError, handleChangePrice, handleResetPrice, validationPrice } =
    useLottoPurchaseForm();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">로또 어플리케이션</h1>
        <LottoPurchase
          price={price}
          tickets={tickets}
          hasPriceError={hasPriceError}
          onPurchase={() => {
            if (validationPrice()) {
              handlePurchaseLotto(price);
              handleResetPrice();
            }
          }}
          onPriceChange={handleChangePrice}
        />

        <LottoResult
          results={results}
          winningDraw={winningDraw}
          onCheckWinning={() => {
            if (tickets.length === 0) return;
            handleCheckWinning();
          }}
        />

        <LottoHistory histories={histories} />

        <LottoStatistics numberFrequency={numberFrequency} />

        <Button
          className="mt-4 mb-4 w-full"
          size="lg"
          onClick={() => {
            handleResetGame();
            handleResetPrice();
          }}>
          처음부터 다시하기
        </Button>
      </section>
    </main>
  );
}

export default App;
