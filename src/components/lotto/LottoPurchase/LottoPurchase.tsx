import { Button, Input } from '@/components';
import { LOTTO_PRICE_UNIT, LOTTO_PURCHASE_UNIT } from '@/constants';

interface ILottoPurchaseProps {
  price: string;
  hasPriceError: boolean;
  tickets: number[][];
  onPurchase: () => void;
  onPriceChange: React.ChangeEventHandler<HTMLInputElement>;
}

const LottoPurchase = ({
  price,
  hasPriceError,
  onPurchase,
  onPriceChange,
}: ILottoPurchaseProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-end space-x-2">
        <div className="flex-grow">
          <label htmlFor="lottoPrice" className="text-sm font-medium">
            로또 구매 금액
          </label>
          <Input
            id="lottoPrice"
            type="number"
            value={price}
            className="mt-1"
            hasError={hasPriceError}
            placeholder="금액을 입력하세요"
            onChange={onPriceChange}
          />
        </div>
        <Button onClick={onPurchase}>구매</Button>
      </div>

      {hasPriceError && (
        <p className="mt-2 text-sm text-red-500">
          로또 금액은 {LOTTO_PURCHASE_UNIT.toLocaleString()}
          {LOTTO_PRICE_UNIT} 단위로 입력해주세요.
        </p>
      )}
    </div>
  );
};

export default LottoPurchase;
