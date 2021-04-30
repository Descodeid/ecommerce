import React from 'react';
import {StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILRegister} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const Register = () => {
  return (
    <View style={styles.page}>
      <View style={styles.illustration}>
        <ILRegister />
      </View>
      <Gap height={20} />
      <View style={styles.input}>
        <TextInput placeholder="Nama" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="No Handphone" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Email" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Password" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Ulangi Password" />
      </View>
      <Gap height={44} />
      <View style={styles.button}>
        <Button text="Register" fontSize={14} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  illustration: {
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
});
