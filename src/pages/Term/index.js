import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Header} from '../../components';

const Term = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Kebijakan Privasi" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut a ut
          rutrum scelerisque pharetra. Eu donec id dignissim ut at. Gravida
          posuere sit enim sed orci aliquam ut. Nam amet, vitae ut a sit. Sit
          nunc elementum interdum netus euismod egestas vel. Nisl lacus,
          fermentum nulla feugiat dolor est non ac imperdiet. Nisl nisi, egestas
          ac commodo non massa pellentesque odio. Tellus sed pulvinar sit felis,
          laoreet malesuada odio lorem. Molestie nulla cras adipiscing et.
          Ullamcorper eget etiam mauris cursus integer nulla. Magna porttitor et
          amet, duis tempor et et neque, feugiat. Etiam turpis a velit aliquet
          pharetra amet adipiscing ante suscipit. Risus tellus purus sed in. Non
          convallis sagittis non ultricies ut mi arcu cursus vehicula.
        </Text>
      </View>
    </View>
  );
};

export default Term;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    marginVertical: normalize(16),
    marginHorizontal: normalize(20),
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
    textAlign: 'justify',
  },
});
