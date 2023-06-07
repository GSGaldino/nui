import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { Typography } from '@/components';

import * as S from './styles';

interface IPaymentMethod {
  price: string;
  paymentMethods: Array<{ value: string }>,
  selectedPaymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>
}

function PaymentMethod({ price, paymentMethods, selectedPaymentMethod, setPaymentMethod }: IPaymentMethod) {
  const onChange = (value: string) => {
    setPaymentMethod(value);
  };

  return (
    <S.Container>
      <Typography as="strong" variant="body-default">Selecione o método de pagamento</Typography>
      <S.Methods>
        {paymentMethods?.map((method) => (
          <IconButton
            key={method.value}
            onClick={() => onChange(method.value)}
            active={method.value === selectedPaymentMethod}
          >
            {method.value}
          </IconButton>
        ))}

        <S.Price>
          <Typography color="gray">{price}</Typography>
        </S.Price>
      </S.Methods>
    </S.Container>
  );
}

PaymentMethod.propTypes = {
  price: PropTypes.string,
};

PaymentMethod.defaultProps = {
  price: '',
};

export default PaymentMethod;
