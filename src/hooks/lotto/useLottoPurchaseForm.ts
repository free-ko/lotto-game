import { useReducer } from 'react';

import { lottoPurchaseFromReducer } from '@/reducers';
import { INITIAL_LOTTO_PURCHASE_FORM_STATE, LOTTO_PURCHASE_FORM_TYPE } from '@/constants';

const useLottoPurchaseForm = () => {
  const [state, dispatch] = useReducer(lottoPurchaseFromReducer, INITIAL_LOTTO_PURCHASE_FORM_STATE);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: LOTTO_PURCHASE_FORM_TYPE.SET_PRICE, payload: e.target.value });
  };

  const handleResetPrice = () => {
    dispatch({ type: LOTTO_PURCHASE_FORM_TYPE.SET_PRICE, payload: '' });
    dispatch({ type: LOTTO_PURCHASE_FORM_TYPE.SET_ERROR, payload: false });
  };

  const validationPrice = (): boolean => {
    const priceNumber = parseInt(state.price, 10);
    if (priceNumber % 1000 !== 0) {
      dispatch({ type: LOTTO_PURCHASE_FORM_TYPE.SET_ERROR, payload: true });
      return false;
    }

    return true;
  };

  return {
    price: state.price,
    hasPriceError: state.hasPriceError,
    handleChangePrice,
    handleResetPrice,
    validationPrice,
  };
};

export default useLottoPurchaseForm;
