import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILTerimaKasih} from '../../assets';
import {Button, Gap} from '../../components';

const TerimaKasih = () => {
  return (
    <View style={styles.header}>
      <View style={styles.help}>
        <ILTerimaKasih />
        <View style={styles.texthelp}>
          <Text style={styles.helptext}>Terimakasih Sudah</Text>
          <Text style={styles.helptext}>Berbelanja</Text>
        </View>
        <View style={styles.texthelp1}>
          <Text>Silahkan lakukan pembayaran sesuai</Text>
          <Text>dengan metode yang kamu pilih, klik</Text>
          <Text>tombol dibawah untuk melihat rincian</Text>
          <Text>pembayaran dan cara untuk melakukan</Text>
          <Text>pembayaran</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button text="Lihat Rincian Pembayaran" />
      </View>
    </View>
  );
};

export default TerimaKasih;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: normalize(21),
    left: normalize(15),
    flexDirection: 'row',
    textAlign: 'auto',
  },
  textheader: {
    fontFamily: 'OpensSans-Bold',
    fontSize: 20,
    alignItems: 'center',
  },
  help: {
    position: 'absolute',
    top: normalize(115),
    left: normalize(85),
  },
  helptext: {
    fontSize: 14,
    fontFamily: 'OpensSans-Bold',
    textAlign: 'center',
  },
  texthelp: {
    position: 'absolute',
    top: normalize(170),
    left: normalize(50),
  },
  texthelp1: {
    position: 'absolute',
    top: normalize(220),
    left: normalize(20),
  },
  button: {
    width: '95%',
    marginTop: normalize(420),
  },
});
