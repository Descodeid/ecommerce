import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILProfile} from '../../assets';
import {Button, Gap} from '../../components';

const Profile = () => {
  return (
    <View style={styles.header}>
      <ILProfile />
      <Gap height={35} />
      <View style={styles.text}>
        <Text style={styles.text1}>Register</Text>
        <Gap height={10} />
        <Text style={styles.text2}>kamu belum terdaftar, ayo daftar</Text>
        <Text style={styles.text2}>sekarang dan nikmati kemudahan</Text>
        <Text style={styles.text2}>dan kepuasan dalam berbelanja</Text>
      </View>
      <Gap height={56} />
      <View style={styles.button}>
        <Button text="Register Sekarang" />
      </View>
      <Gap height={24} />
      <View style={styles.footer}>
        <Text style={styles.text3}>Sudah punya akun ?</Text>
        <Gap width={4} />
        <Text style={styles.text4}>Login disini</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: normalize(215),
    left: normalize(100),
    right: normalize(110),
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    width: 230,
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular'
  },
  button: {
    backgroundColor: 'yellow',
    width: '150%',
  },
  footer: {
      flexDirection: 'row'
  },
  text3: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 14,
  },
  text4: {
      fontFamily: 'OpenSans-Bold',
      color: '#4584FF'
  }
});
