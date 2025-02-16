import { useLottoGamePurchaseForm, useLottoGame } from '@/hooks';
import {
  Button,
  LottoHistory,
  LottoPurchase,
  LottoResult,
  LottoStatistics,
  LottoTicketList,
} from '@/components';

import './index.css';

function LottoApp() {
  const {
    results,
    tickets,
    winningDraw,
    histories,
    isShowStatistics,
    lottoNumberFrequencyMaxCount,
    frequencyArray,
    isShowHistories,
    handleResetGame,
    handleCheckWinning,
    handlePurchaseLotto,
    toggleIsStatistics,
    toggleIsShowHistories,
  } = useLottoGame();

  const { price, hasPriceError, handleChangePrice, handleResetPrice, validatePrice } =
    useLottoGamePurchaseForm();

  const handleResetLottoGame = () => {
    handleResetGame();
    handleResetPrice();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">로또 어플리케이션</h1>
        <LottoPurchase
          price={price}
          tickets={tickets}
          hasPriceError={hasPriceError}
          onPurchase={() => {
            if (!validatePrice()) return;

            handlePurchaseLotto(price);
            handleResetPrice();
          }}
          onPriceChange={handleChangePrice}
        />

        {tickets.length !== 0 && <LottoTicketList tickets={tickets} />}

        <Button
          size="lg"
          className="mb-4 w-full"
          onClick={handleCheckWinning}
          disabled={tickets.length === 0}>
          결과 확인
        </Button>

        <LottoResult results={results} winningDraw={winningDraw} />

        <LottoHistory
          histories={histories}
          isShowHistories={isShowHistories}
          toggleIsShowHistories={toggleIsShowHistories}
        />

        <LottoStatistics
          lottoNumberFrequencyMaxCount={lottoNumberFrequencyMaxCount}
          isShowStatistics={isShowStatistics}
          frequencyArray={frequencyArray}
          toggleIsStatistics={toggleIsStatistics}
        />

        <Button className="mt-4 mb-4 w-full" size="lg" onClick={handleResetLottoGame}>
          처음부터 다시하기
        </Button>
      </section>
    </main>
  );
}

export default LottoApp;
