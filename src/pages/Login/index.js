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

const Login = () => {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <ScrollView style={styles.page}>
      <Gap height={25} />
      <View style={styles.illustration}>
        <View>
          <Text style={styles.text}>Login</Text>
          <Gap height={5} />
          <View style={styles.line} />
        </View>
        <ILAuth />
      </View>
      <Gap height={20} />
      <View style={styles.input}>
        <TextInput placeholder="No Handphone / Email" />
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
      <Gap height={44} />
      <View style={styles.button}>
        <Button text="Login" fontSize={14} />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  illustration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(40),
    color: '#3D3D3D',
    marginLeft: normalize(32),
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
  inputPassword: {
    flexDirection: 'row',
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  password: {
    flex: 1,
  },
  hide: {
    position: 'absolute',
    right: normalize(40),
  },
});
