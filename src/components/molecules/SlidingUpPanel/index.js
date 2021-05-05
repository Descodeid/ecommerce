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
import {IcClockBlue} from '../../../assets';
import {Gap} from '../../atoms';

const SlidingUpPanel = ({title, data, show, closePopup, type}) => {
  return (
    <>
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

        {type === 'Promo' ? (
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
        ) : (
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
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(16),
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
});
