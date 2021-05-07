import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useSelector} from 'react-redux';
import {IcCamera, User} from '../../assets';
import {Button, Gap, Header, SlidingUpPanel} from '../../components';

const EditProfile = ({navigation}) => {
  const [isShow, setIsShow] = React.useState(false);

  const {photoReducer} = useSelector(state => state);

  const close = () => {
    setIsShow(false);
  };
  return (
    <View style={styles.page}>
      <Header text="Edit Profile" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {photoReducer.uri === '' ? (
            <Image source={User} style={styles.image} />
          ) : (
            <Image source={photoReducer} style={styles.image} />
          )}
          <Gap height={13} />
          <TouchableOpacity
            style={styles.imageContent}
            activeOpacity={0.7}
            onPress={() => setIsShow(!isShow)}>
            <IcCamera />
            <Gap width={13} />
            <Text style={styles.text}>Ganti foto profil</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nama</Text>
            <TextInput
              value="Fulan bin fulan"
              style={styles.input}
              placeholderTextColor="#747474"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nomer Handphone</Text>
            <TextInput
              value="087232272626"
              style={styles.input}
              placeholderTextColor="#747474"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value="fulan@gmail.com"
              style={styles.input}
              placeholderTextColor="#747474"
            />
          </View>
        </View>
        <Gap height={10} />
        <View>
          <Button text="Simpan" sfontSize={14} />
        </View>
      </View>

      <SlidingUpPanel
        title="Upload Photo"
        subtitle="Upload Your Profile Picture"
        show={isShow}
        closePopup={close}
        type="Upload"
      />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: normalize(15),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(35),
  },
  imageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: normalize(90),
    height: normalize(90),
    borderRadius: normalize(45),
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#747474',
  },
  inputContainer: {
    marginBottom: normalize(20),
  },
  label: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#747474',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
});
