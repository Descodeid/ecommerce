import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {
  Background,
  IcCall,
  IcLock,
  IcLogout,
  IcPen,
  IcShield,
  IcWork,
  User,
} from '../../assets';
import {BeforeLogin, Gap, ListProfile} from '../../components';

const Profile = ({navigation}) => {
  const [login] = React.useState(true);
  if (login) {
    return (
      <View style={styles.page}>
        <ImageBackground source={Background} style={styles.background}>
          <View style={styles.header}>
            <Image source={User} />
            <Gap width={24} />
            <View>
              <Text style={styles.name}>Fulan bin fulan</Text>
              <Text style={styles.phone}>087232272626</Text>
            </View>
          </View>
        </ImageBackground>
        <ListProfile text="Edit Profile" icon={<IcPen />} />
        <ListProfile
          text="Ubah Kata Sandi"
          icon={<IcLock />}
          onPress={() => navigation.navigate('ChangePassword')}
        />
        <View style={styles.spacing}>
          <Text style={styles.more}>Lainnya</Text>
        </View>
        <ListProfile
          text="Tentang Perusahaan"
          icon={<IcWork />}
          onPress={() => navigation.navigate('AboutUs')}
        />
        <ListProfile
          text="Kebijakan Privasi"
          icon={<IcShield />}
          onPress={() => navigation.navigate('Term')}
        />
        <ListProfile
          text="Bantuan"
          icon={<IcCall />}
          onPress={() => navigation.navigate('Support')}
        />
        <ListProfile text="Logout" icon={<IcLogout />} color="#FFDCDC" />
      </View>
    );
  } else {
    return <BeforeLogin />;
  }
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  background: {
    width: '100%',
    height: normalize(130),
  },
  header: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(20),
    color: '#FFFFFF',
  },
  phone: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(20),
    color: '#FFFFFF',
  },
  spacing: {
    backgroundColor: 'rgba(69, 132, 255, 0.2)',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(8),
    justifyContent: 'center',
  },
  more: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#4584FF',
  },
});
