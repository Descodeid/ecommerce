import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcBack, ILBantuan, ILButtonHelp} from '../../assets';
import {Gap} from '../../components';

const Bantuan = () => {
  return (
    <View style={styles.header}>
      <IcBack />
      <Gap width={15} />
      <Text style={styles.textheader}>Bantuan</Text>
      <View style={styles.help}>
        <ILBantuan />
        <View style={styles.texthelp}>
          <Text style={styles.helptext}>Hai kamu lagi kesulitan?</Text>
          <Text style={styles.helptext}>kami siap membantumu kapanpun</Text>
          <Text style={styles.helptext}>dimanapun kamu berada,</Text>
          <Text style={styles.helptext}>silahkan klik tombol dibawah ini untuk</Text>
          <Text style={styles.helptext}>diarahkan ke whatsapp kami</Text>
        </View>
      </View>
      <View style={styles.footer}>
      <ILButtonHelp />
      </View>
    </View>
  );
};

export default Bantuan;

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
  },
  help: {
    //   marginTop: normalize(100)
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
    top: normalize(150),
  },
  footer: {
      position: 'absolute',
      top: normalize(350),
      left: normalize(35),
  }
});
