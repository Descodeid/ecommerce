import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';

const Number = ({number, style}) => {
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      decimalSeparator=","
      displayType="text"
      prefix="Rp. "
      renderText={value => <Text style={style}>{value}</Text>}
    />
  );
};

export default Number;
