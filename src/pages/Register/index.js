import React from 'react';
import normalize from 'react-native-normalize';
import {StyleSheet, Text, View} from 'react-native';
import {ILBulat, ILKotak, ILPil, ILRegister} from '../../assets/Illustrations';
import {Button, Gap, TextInput} from '../../components';
import {IcFacebook, IcGoogle, IcIphone} from '../../assets/Icons';

const RegisterScreen = () => {
  return (
    <View style={styles.header}>
      <ILRegister />
      <Gap height={21} />
      <View style={styles.tengah}>
        <View style={styles.google}>
          <IcGoogle />
        </View>
        <View style={styles.facebok}>
          <IcFacebook />
        </View>
        <View style={styles.iphone}>
          <IcIphone />
        </View>
      </View>
      <Gap height={28} />
      <Text style={styles.regist}>Or Register with email</Text>
      <Gap height={68} />
      <View style={styles.input}>    
      <TextInput placeholder="Nama" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Verify Password" />
      </View>
    <View style={styles.button}>
      <Button text="Register" />
    </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: normalize(40),
  },
  tengah: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  google: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: normalize(16),
  },
  facebok: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: normalize(16),
  },
  iphone: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: normalize(16),
  },
  regist: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
  },
  button: {
      marginVertical: normalize(60),
      width: '60%',
      borderRadius: 25,
  },
  input: {
      width: '80%'
  }
});
