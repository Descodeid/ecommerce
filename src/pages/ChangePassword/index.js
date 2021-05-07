import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {TextPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import {IcHide, IcShow, IcWarning} from '../../assets';
import {Button, Gap, Header} from '../../components';

const ChangePassword = ({navigation}) => {
  const [isHidden, setIsHidden] = React.useState(true);
  const [isHiddenConfirm, setIsHiddenConfirm] = React.useState(true);

  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const levels = [
    {
      label: 'Password Lemah',
      labelColor: '#FF7675',
    },
    {
      label: 'Password Sedang',
      labelColor: '#00CEC9',
    },
    {
      label: 'Password Kuat',
      labelColor: '#4584FF',
    },
  ];
  return (
    <View style={styles.page}>
      <Header text="Ubah Kata Sandi" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.alert}>
          <IcWarning />
          <Gap width={12} />
          <Text style={styles.textWarning}>
            Password harus terdiri 8 karakter meliputi angka, huruf dan simbol
          </Text>
        </View>
        <Gap height={30} />
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password Lama</Text>
            <TextInput
              placeholder="Masukkan Password Lama"
              style={styles.input}
              placeholderTextColor="#747474"
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.label}>Password Baru</Text>
              <TextPasswordStrengthDisplay
                password={password}
                minLength={8}
                labelStyle={styles.strengthMeter}
                levels={levels}
                wrapperStyle={styles.wrapperStyle}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Password Baru"
              secureTextEntry={isHidden}
              placeholderTextColor="#747474"
              onChangeText={value => setPassword(value)}
            />
            <TouchableOpacity
              style={styles.hide}
              onPress={() => setIsHidden(!isHidden)}>
              {isHidden ? <IcShow /> : <IcHide />}
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Ulangi Password Baru</Text>
            <TextInput
              placeholder="Masukkan Password Lama"
              style={styles.input}
              placeholderTextColor="#747474"
              secureTextEntry={isHiddenConfirm}
              onChangeText={value => setPasswordConfirm(value)}
            />
            <TouchableOpacity
              style={styles.hide}
              onPress={() => setIsHiddenConfirm(!isHiddenConfirm)}>
              {isHiddenConfirm ? <IcShow /> : <IcHide />}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Button text="Simpan" fontSize={14} />
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: normalize(15),
  },
  alert: {
    flexDirection: 'row',
    backgroundColor: '#FFE4E3',
    alignItems: 'center',
    borderRadius: normalize(5),
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(14),
  },
  textWarning: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
    width: '90%',
    lineHeight: normalize(16),
  },
  inputContainer: {
    marginBottom: normalize(20),
  },
  label: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  hide: {
    position: 'absolute',
    right: normalize(30),
    top: normalize(30),
  },
  strengthMeter: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
  },
  wrapperStyle: {
    position: 'absolute',
    right: normalize(15),
    bottom: normalize(20),
  },
});
