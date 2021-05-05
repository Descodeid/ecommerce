import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Button, Gap, Header} from '../../components';

const AddAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Tambah Alamat" onPress={() => navigation.goBack()} />
      <Gap height={12} />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nama Alamat (contoh : Rumah, Kantor)</Text>
          <TextInput
            placeholder="Contoh: Rumah"
            style={styles.input}
            placeholderTextColor="#747474"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nama Pengguna</Text>
          <TextInput
            placeholder="Masukkan Nama Anda"
            style={styles.input}
            placeholderTextColor="#747474"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>No. Handphone</Text>
          <TextInput
            placeholder="Masukkan No. Handphone"
            style={styles.input}
            placeholderTextColor="#747474"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Alamat Lengkap</Text>
          <TextInput
            placeholder="Masukkan Alamat Lengkap"
            style={styles.input}
            placeholderTextColor="#747474"
          />
        </View>
        <Gap height={24} />
        <Button text="Simpan" fontSize={14} />
      </View>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: normalize(15),
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
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
});
