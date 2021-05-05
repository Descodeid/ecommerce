import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {IcHide, IcShow, ILAuth} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const Register = () => {
  const [isHidden, setIsHidden] = React.useState(true);
  const [isHiddenConfirm, setIsHiddenConfirm] = React.useState(true);
  return (
    <ScrollView style={styles.page}>
      <Gap height={90} />
      <View style={styles.illustration}>
        <View>
          <Text style={styles.text}>Register</Text>
          <Gap height={5} />
          <View style={styles.line} />
        </View>
        <View style={styles.auth}>
          <ILAuth />
        </View>
      </View>
      <Gap height={95} />
      <View style={styles.input}>
        <TextInput placeholder="Nama" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="No Handphone" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Email" />
      </View>
      <View style={styles.inputPassword}>
        <View style={styles.password}>
          <TextInput placeholder="Password" secureTextEntry={isHidden} />
        </View>
        <TouchableOpacity
          style={styles.hide}
          onPress={() => setIsHidden(!isHidden)}>
          {isHidden ? <IcShow /> : <IcHide />}
        </TouchableOpacity>
      </View>
      <View style={styles.inputPassword}>
        <View style={styles.password}>
          <TextInput
            placeholder="Ulangi Password"
            secureTextEntry={isHiddenConfirm}
          />
        </View>
        <TouchableOpacity
          style={styles.hide}
          onPress={() => setIsHiddenConfirm(!isHiddenConfirm)}>
          {isHiddenConfirm ? <IcShow /> : <IcHide />}
        </TouchableOpacity>
      </View>
      <Gap height={43} />
      <View style={styles.button}>
        <Button text="Register" fontSize={14} />
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  illustration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(40),
    color: '#3D3D3D',
    marginLeft: normalize(32),
  },
  auth: {
    position: 'absolute',
    right: 0,
  },
  input: {
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
  },
  inputPassword: {
    flexDirection: 'row',
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingHorizontal: normalize(20),
  },
  line: {
    borderBottomWidth: 5,
    width: normalize(70),
    borderColor: '#4584FF',
    marginLeft: normalize(32),
  },
  password: {
    flex: 1,
  },
  hide: {
    position: 'absolute',
    right: normalize(40),
  },
});
