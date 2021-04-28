import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import {
  IcItem1,
  IcItem2,
  IcItem3,
  IcItem4,
  IcItem5,
  ILRegister,
} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const Register = () => {
  return (
    <View style={styles.page}>
      <Gap height={80} />
      <Image source={IcItem1} style={styles.item1} />
      <Image source={IcItem2} style={styles.item2} />
      <Image source={IcItem3} style={styles.item3} />
      <Image source={IcItem4} style={styles.item4} />
      <Image source={IcItem5} style={styles.item5} />
      <View style={styles.Illustration}>
        <ILRegister />
      </View>
      <Gap height={45} />
      <View style={styles.input}>
        <TextInput placeholder="Nama" />
        <Gap height={30} />
        <TextInput placeholder="Email" />
        <Gap height={30} />
        <TextInput placeholder="Password" />
        <Gap height={30} />
        <TextInput placeholder="Verify Password" />
      </View>
      <Gap height={30} />
      <View style={styles.button}>
        <Button text="Register" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Illustration: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item1: {
    position: 'absolute',
    top: normalize(80),
    left: normalize(60),
  },
  item2: {
    position: 'absolute',
    top: normalize(80),
    left: normalize(270),
  },
  item3: {
    position: 'absolute',
    top: normalize(230.51),
    left: normalize(57),
  },
  item4: {
    position: 'absolute',
    top: normalize(241),
    left: normalize(258),
  },
  item5: {
    position: 'absolute',
    top: normalize(200.37),
    left: normalize(115.83),
  },
  input: {
    paddingHorizontal: normalize(43),
  },
  button: {
    paddingHorizontal: normalize(68),
  },
});
