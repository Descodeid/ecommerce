import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILTerimaKasih} from '../../assets';
import {Button, Gap} from '../../components';

const TransactionSuccess = () => {
  return (
    <View style={styles.page}>
      <View style={styles.illustration}>
        <ILTerimaKasih />
      </View>
      <Gap height={20} />
      <View style={styles.container}>
        <View style={styles.thanksContainer}>
          <Text style={styles.thanks}>Terimakasih Sudah Berbelanja</Text>
        </View>
        <Gap height={20} />
        <View style={styles.descContainer}>
          <Text style={styles.desc}>
            Silahkan lakukan pembayaran sesuai dengan metode yang kamu pilih,
            klik tombol dibawah untuk melihat rincian pembayaran dan cara untuk
            melakukan pembayaran
          </Text>
        </View>
      </View>
      <Gap height={40} />
      <View style={styles.button}>
        <Button text="Lihat Rincian Pembayaran" />
      </View>
    </View>
  );
};

export default TransactionSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  illustration: {
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  thanksContainer: {
    width: normalize(200),
  },
  thanks: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(16),
    color: '#3D3D3D',
    textAlign: 'center',
  },
  descContainer: {
    width: normalize(225),
  },
  desc: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#747474',
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: normalize(15),
  },
});
