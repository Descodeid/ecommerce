import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import normalize from 'react-native-normalize';
import {
  IcFacebook,
  IcGoogle,
  ILLogin,
} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <View style={styles.Illustration}>
        <ILLogin />
      </View>
      <Gap height={15} />
      <View style={styles.input}>
        <Gap height={15} />
        <TextInput placeholder="No Handphone / Email" />
        <Gap height={15} />
        <TextInput placeholder="Password" />
      </View>
      <Gap height={23} />
      <View style={styles.button}>
        <Button text="Login" />
      </View>
      <Gap height={23} />
      <Text style={styles.regist}>
        Atau Register dengan
      </Text>
      <Gap height={10} />
      <View style={styles.icons}>
      <View style={styles.icon}>
        <IcGoogle />
        </View>
        <Gap width={10} />
        <View style={styles.icon1}>
        <IcFacebook />
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    paddingHorizontal: normalize(20),
  },
  button: {
    paddingHorizontal: normalize(68),
  },
  regist: {
    textAlign: 'center',
    fontFamily: 'OpensSans',
    fontSize: normalize(14),
  },
  icon: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: normalize(20),
    paddingHorizontal: normalize(26),
    paddingVertical: normalize(16)
  },
  icon1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: normalize(20),
    paddingHorizontal: normalize(26),
    paddingVertical: normalize(16)
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
