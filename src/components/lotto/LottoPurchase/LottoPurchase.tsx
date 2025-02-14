import { Button, Input } from '@/components';

interface ILottoPurchaseProps {
  price: string;
  hasPriceError: boolean;
  tickets: number[][];
  onPurchase: () => void;
  onPriceChange: React.ChangeEventHandler<HTMLInputElement>;
}

const LottoPurchase = ({
  price,
  tickets,
  hasPriceError,
  onPurchase,
  onPriceChange,
}: ILottoPurchaseProps) => {
  return (
    <div>
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
        <p className="mt-2 text-sm text-red-500">로또 금액은 1,000원 단위로 입력해주세요.</p>
      )}

      <div className="mt-4 mb-4">
        <h2 className="mb-2 text-lg font-semibold">구매한 로또 번호</h2>
        {tickets.length > 0 && (
          <ul className="space-y-2">
            {tickets.map((ticket, index) => (
              <li key={index} className="rounded bg-gray-100 p-2">
                {ticket.join(', ')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LottoPurchase;
