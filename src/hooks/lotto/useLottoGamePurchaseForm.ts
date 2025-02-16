import { useReducer } from 'react';

import { LOTTO } from '@/constants';
import { lottoPurchaseFromReducer } from '@/reducers';

const useLottoGamePurchaseForm = () => {
  const [state, dispatch] = useReducer(lottoPurchaseFromReducer, LOTTO.INITIAL_PURCHASE_FORM_STATE);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: LOTTO.PURCHASE_FORM_ACTIONS.SET_PRICE,
      payload: e.target.value,
    });
  };

  const handleResetPrice = () => {
    dispatch({ type: LOTTO.PURCHASE_FORM_ACTIONS.SET_PRICE, payload: '' });
    dispatch({ type: LOTTO.PURCHASE_FORM_ACTIONS.SET_ERROR, payload: false });
  };

  const validatePrice = (): boolean => {
    const priceNumber = parseInt(state.price, 10);
    if (priceNumber % LOTTO.CONFIG.PURCHASE_UNIT !== 0) {
      dispatch({ type: LOTTO.PURCHASE_FORM_ACTIONS.SET_ERROR, payload: true });
      return false;
    }

    return true;
  };

  return {
    price: state.price,
    hasPriceError: state.hasPriceError,
    handleChangePrice,
    handleResetPrice,
    validatePrice,
  };
};

export default useLottoGamePurchaseForm;
