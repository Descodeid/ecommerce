import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILProfile} from '../../../assets';
import {Button, Gap} from '../../atoms';

const BeforeLogin = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILProfile />
      <Gap height={30} />
      <View style={styles.container}>
        <Text style={styles.textRegister}>Register Sekarang</Text>
        <Gap height={10} />
        <Text style={styles.desc}>
          kamu belum terdaftar, ayo daftar sekarang dan nikmati kemudahan dan
          kepuasan dalam berbelanja
        </Text>
      </View>
      <Gap height={44} />
      <View style={styles.button}>
        <Button
          text="Register Sekarang"
          fontSize={14}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <Gap height={24} />
      <View style={styles.footer}>
        <Text style={styles.text3}>Sudah punya akun?</Text>
        <Gap width={6} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text4}>Login disini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BeforeLogin;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: normalize(210),
    alignItems: 'center',
  },
  textRegister: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(16),
    color: '#3D3D3D',
  },
  desc: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingHorizontal: normalize(15),
  },
  footer: {
    flexDirection: 'row',
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  text4: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#4584FF',
  },
});
