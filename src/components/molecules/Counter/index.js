import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {IcMinus, IcPlus, IcTrash} from '../../../assets';
import {Gap} from '../../atoms';

const Counter = ({onValueChange, id}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange({id: id, result});
  };
  return (
    <View style={styles.grouping}>
      <IcTrash />
      <View style={styles.amountContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.minus}
          onPress={() => onCount('minus')}>
          <IcMinus />
        </TouchableOpacity>
        <Gap width={15} />
        <Text style={styles.value}>{value}</Text>
        <Gap width={15} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.plus}
          onPress={() => onCount('plus')}>
          <IcPlus />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  amountContainer: {
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
    padding: normalize(4),
    borderRadius: normalize(30),
    marginLeft: normalize(10),
  },
  grouping: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  minus: {
    padding: normalize(3.77),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(30),
  },
  plus: {
    padding: normalize(3.77),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(30),
  },
  value: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
});
