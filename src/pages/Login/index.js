import React from 'react';
import {StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILLogin} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      <Gap height={25} />
      <View style={styles.Illustration}>
        <ILLogin />
      </View>
      <Gap height={20} />
      <View style={styles.input}>
        <TextInput placeholder="No Handphone / Email" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Password" />
      </View>
      <Gap height={44} />
      <View style={styles.button}>
        <Button text="Login" fontSize={14} />
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
  input: {
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
  },
  button: {
    width: '100%',
    paddingHorizontal: normalize(20),
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
    paddingVertical: normalize(16),
  },
  icon1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: normalize(20),
    paddingHorizontal: normalize(26),
    paddingVertical: normalize(16),
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
