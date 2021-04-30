import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcWhatsapp, ILBantuan} from '../../assets';
import {Button, Gap, Header} from '../../components';

const Support = () => {
  return (
    <View style={styles.page}>
      <Header text="Bantuan" />
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
          <Button
            text="083623723232"
            backgroundColor="#DCFFEE"
            color="#3D3D3D"
            icon={<Image source={IcWhatsapp} />}
          />
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
    width: normalize(180),
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
