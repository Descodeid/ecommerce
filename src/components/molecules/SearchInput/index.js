import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcSearch} from '../../../assets';

const SearchInput = ({width = '90%', color = '#FFFFFF'}) => {
  return (
    <View style={styles.container(width)}>
      <Image source={IcSearch} style={styles.icon} />
      <View style={styles.input(color)}>
        <TextInput
          style={styles.textInput}
          placeholder="Cari barang disini..."
          placeholderTextColor="#3D3D3D"
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: width => ({
    width,
    marginTop: normalize(-16),
  }),
  icon: {
    width: normalize(16),
    height: normalize(16),
    left: normalize(27),
    top: normalize(32),
    zIndex: 1,
  },
  input: color => ({
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    backgroundColor: color,
    borderRadius: normalize(5),
    zIndex: 0,
    paddingLeft: normalize(48),
    color: '#3D3D3D',
  }),
  textInput: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
});
