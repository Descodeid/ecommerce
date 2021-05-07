import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILBantuan} from '../../assets';
import {Button, Gap, Header} from '../../components';

const Support = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Bantuan" onPress={() => navigation.goBack()} />
      <Gap height={94} />
      <View style={styles.container}>
        <ILBantuan />
        <Gap height={20} />
        <View style={styles.descContainer}>
          <Text style={styles.desc}>
            Hai kamu lagi kesulitan? kami siap membantumu kapanpun dimanapun
            kamu berada, silahkan klik tombol dibawah ini untuk diarahkan ke
            whatsapp kami
          </Text>
        </View>
        <Gap height={30} />
        <View style={styles.button}>
          <Button text="Hubungi Kami" fontSize={14} />
        </View>
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  descContainer: {
    width: normalize(200),
  },
  desc: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
    lineHeight: normalize(19),
  },
  button: {
    width: '100%',
    paddingHorizontal: normalize(15),
  },
});
