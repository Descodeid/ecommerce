import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILTransactionSuccess} from '../../assets';
import {Gap} from '../../components';

const TransactionSuccess = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <ILTransactionSuccess />
      <Gap height={20} />
      <Text style={styles.thanks}>Terimakasih Sudah Berbelanja</Text>
    </View>
  );
};

export default TransactionSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thanks: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(16),
    color: '#3D3D3D',
  },
});
