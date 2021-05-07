import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {IcClockBlue, IcError, IcSuccess} from '../../../assets';
import {Button, Gap} from '../../atoms';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast, {BaseToast} from 'react-native-toast-message';
import {useDispatch} from 'react-redux';

const SlidingUpPanel = ({title, subtitle, data, show, closePopup, type}) => {
  const dispatch = useDispatch();
  const takePhoto = () => {
    launchCamera(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          closePopup();
          Toast.show({
            text1: 'Anda tidak memilih photo',
            type: 'errorAlert',
            position: 'bottom',
          });
        } else {
          closePopup();
          const source = {uri: response.uri};
          dispatch({type: 'SET_PHOTO', source});
        }
      },
    );
  };

  const chooseFromLibrary = () => {
    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          closePopup();
          Toast.show({
            text1: 'Anda tidak memilih photo',
            type: 'errorAlert',
            position: 'bottom',
          });
        } else {
          closePopup();
          const source = {uri: response.uri};
          dispatch({type: 'SET_PHOTO', source});
        }
      },
    );
  };

  const toastConfig = {
    success: ({text1, props, ...rest}) => (
      <BaseToast
        {...rest}
        style={styles.leftSuccess}
        contentContainerStyle={styles.padding}
        text1Style={styles.textAlert}
        text1={text1}
        text2={props.uuid}
      />
    ),

    errorAlert: ({text1, props, ...rest}) => (
      <View style={styles.alertError}>
        <View style={styles.border}>
          <IcError />
        </View>
        <Gap width={8} />
        <Text style={styles.textAlert}>{text1}</Text>
      </View>
    ),
    successAlert: ({text1, props, ...rest}) => (
      <View style={styles.alertSuccess}>
        <IcSuccess />
        <Gap width={8} />
        <Text style={styles.textAlert}>{text1}</Text>
      </View>
    ),
  };

  return (
    <>
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
      {show && (
        <BlurView blurType="dark" blurAmount={100} style={styles.blur} />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {}}>
        <Pressable
          onPress={() => {
            if (!true) {
              return;
            }
            closePopup();
          }}
          style={styles.pressable}
        />

        {type === 'Upload' && (
          <View style={styles.modalUpload}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Button
              text="Take a photo"
              fontSize={14}
              borderRadius={10}
              onPress={takePhoto}
            />
            <Gap height={20} />
            <Button
              text="Choose from library"
              fontSize={14}
              borderRadius={10}
              onPress={chooseFromLibrary}
            />
            <Gap height={20} />
            <Button
              text="Cancel"
              fontSize={14}
              borderRadius={10}
              onPress={() => closePopup()}
            />
          </View>
        )}

        {type === 'Pengiriman' && (
          <View style={styles.modal}>
            <Text style={styles.title}>{title}</Text>
            <Gap height={25} />
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.content}>
                    <Image source={item.image} />
                    <Gap width={15} />
                    <View>
                      <Text style={styles.name}>{item.name}</Text>
                      <Gap height={3} />
                      <Text style={styles.price}>{item.price}</Text>
                      <Gap height={3} />
                      <Text style={styles.duration}>{item.duration}</Text>
                    </View>
                  </View>
                );
              }}
              extraData={data}
              keyExtractor={item => `key-${item.id}`}
            />
          </View>
        )}

        {type === 'Promo' && (
          <View style={styles.modalPromo}>
            <Text style={styles.title}>{title}</Text>
            <Gap height={18} />
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.promoContainer}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.detail}>
                      <Text style={styles.codePromo}>{item.name}</Text>
                      <View style={styles.expiredContainer}>
                        <IcClockBlue />
                        <Gap width={5} />
                        <Text style={styles.expired}>
                          Berlaku sampai {item.expired}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.circle1} />
                    <View style={styles.circle2} />
                  </View>
                );
              }}
              extraData={data}
              keyExtractor={item => `key-${item.id}`}
            />
          </View>
        )}
      </Modal>
    </>
  );
};

export default SlidingUpPanel;

const styles = StyleSheet.create({
  pressable: {flex: 1},
  blur: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modal: {
    width: '100%',
    height: '54%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    paddingHorizontal: normalize(15),
    paddingTop: normalize(30),
  },
  modalPromo: {
    width: '100%',
    height: '58%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    paddingHorizontal: normalize(15),
    paddingTop: normalize(30),
  },
  modalUpload: {
    width: '100%',
    height: '40%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    paddingHorizontal: normalize(15),
    paddingTop: normalize(30),
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(20),
    marginBottom: normalize(30),
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(16),
    color: '#3D3D3D',
  },
  subtitle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  content: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    marginBottom: normalize(20),
    alignItems: 'center',
    paddingBottom: normalize(20),
  },
  name: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#747474',
  },
  price: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#000000',
  },
  duration: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#747474',
  },
  promoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    marginBottom: normalize(25),
    elevation: 3,
  },
  image: {
    width: '100%',
    height: normalize(120),
    borderTopLeftRadius: normalize(10),
    borderTopRightRadius: normalize(10),
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(15),
  },
  codePromo: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  expiredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expired: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  circle1: {
    width: normalize(25),
    height: normalize(25),
    borderRadius: normalize(25 / 2),
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: normalize(108),
    left: normalize(-10),
  },
  circle2: {
    width: normalize(25),
    height: normalize(25),
    borderRadius: normalize(25 / 2),
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: normalize(108),
    right: normalize(-10),
  },
  leftSuccess: {
    borderLeftColor: '#C7DAFF',
  },
  padding: {
    paddingHorizontal: normalize(15),
  },
  textAlert: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#000000',
  },
  alertError: {
    height: normalize(56),
    width: '90%',
    backgroundColor: '#FFE4E3',
    borderRadius: normalize(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(15),
  },
  alertSuccess: {
    height: normalize(56),
    width: '90%',
    backgroundColor: '#C7DAFF',
    borderRadius: normalize(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(15),
  },
  border: {
    width: normalize(24),
    height: normalize(24),
    backgroundColor: '#FF7675',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(12),
  },
});
