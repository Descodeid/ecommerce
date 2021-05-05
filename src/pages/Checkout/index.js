import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowRightBlack, ILEmptyAddress, Product7} from '../../assets';
import {Button, Gap, Header, SlidingUpPanel} from '../../components';

const Checkout = ({navigation}) => {
  const [address] = React.useState(false);
  const [isShow, setIsShow] = React.useState(false);
  const [isShowPromo, setIsShowPromo] = React.useState(false);
  const data = [
    {
      id: 0,
      name: 'J&T Express',
      price: 'Rp. 20.000 /kg',
      duration: '2 - 3 hari pengiriman',
      image: require('../../assets/Dummy/JnT.jpg'),
    },
    {
      id: 1,
      name: 'JNE Express',
      price: 'Rp. 16.000 /kg',
      duration: '4 - 5 hari pengiriman',
      image: require('../../assets/Dummy/JNE.jpg'),
    },
    {
      id: 2,
      name: 'Ninja Express',
      price: 'Rp. 40.000 /kg',
      duration: '1 - 2 hari pengiriman',
      image: require('../../assets/Dummy/Ninja.jpg'),
    },
    {
      id: 3,
      name: 'Ninja Express',
      price: 'Rp. 40.000 /kg',
      duration: '1 - 2 hari pengiriman',
      image: require('../../assets/Dummy/Ninja.jpg'),
    },
    {
      id: 4,
      name: 'Ninja Express',
      price: 'Rp. 40.000 /kg',
      duration: '1 - 2 hari pengiriman',
      image: require('../../assets/Dummy/Ninja.jpg'),
    },
  ];

  const dataPromo = [
    {
      id: 0,
      name: 'PROMOKUY',
      expired: '22 April 2020',
      image: require('../../assets/Dummy/Banner1.png'),
    },
    {
      id: 1,
      name: 'PROMOKUY',
      expired: '22 April 2020',
      image: require('../../assets/Dummy/Banner1.png'),
    },
    {
      id: 2,
      name: 'PROMOKUY',
      expired: '22 April 2020',
      image: require('../../assets/Dummy/Banner1.png'),
    },
    {
      id: 3,
      name: 'PROMOKUY',
      expired: '22 April 2020',
      image: require('../../assets/Dummy/Banner1.png'),
    },
  ];

  const close = () => {
    setIsShow(false);
  };

  const closePromo = () => {
    setIsShowPromo(false);
  };

  return (
    <View style={styles.page}>
      <Header text="Pengiriman" onPress={() => navigation.goBack()} />
      <Gap height={5} />
      <ScrollView>
        {address ? (
          <View style={styles.addressContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Alamat Pengiriman</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('EditAddress')}>
                <Text style={styles.labelChange}>Ubah Alamat</Text>
              </TouchableOpacity>
            </View>
            <Gap height={13} />
            <Text style={styles.typeAddress}>Rumah</Text>
            <Gap height={8} />
            <Text style={styles.detail}>Ryan</Text>
            <Gap height={8} />
            <Text style={styles.detail}>089639626048</Text>
            <Gap height={8} />
            <Text style={styles.detail}>
              Jl. Lorem ipsum dolor sit amet, No. 17 adipiscing elit. In nisi,
              velit facilisis donec. In eget enim eget viverra vulputate quam
              sed mus.
            </Text>
          </View>
        ) : (
          <View style={styles.addressContainer}>
            <Text style={styles.label}>Alamat Pengiriman</Text>
            <View style={styles.illustration}>
              <ILEmptyAddress />
            </View>
            <Button
              text="Tambah Alamat"
              fontSize={14}
              onPress={() => navigation.navigate('AddAddress')}
            />
          </View>
        )}
        <Gap height={5} />
        <View style={styles.productContainer}>
          <Text style={styles.label}>Produk yang dibeli</Text>
          <Gap height={24} />
          <View style={styles.card}>
            <Image source={Product7} style={styles.image} />
            <View style={styles.detailProduct}>
              <Text style={styles.productName}>Nike shoes Savaleos</Text>
              <Gap height={6} />
              <Text style={styles.productQty}>1 Barang</Text>
              <Gap height={13} />
              <View style={styles.line} />
              <Gap height={10} />
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Total Bayar</Text>
                <Text style={styles.productTotal}>Rp. 25.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={Product7} style={styles.image} />
            <View style={styles.detailProduct}>
              <Text style={styles.productName}>Nike shoes Savaleos</Text>
              <Gap height={6} />
              <Text style={styles.productQty}>1 Barang</Text>
              <Gap height={13} />
              <View style={styles.line} />
              <Gap height={10} />
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Total Bayar</Text>
                <Text style={styles.productTotal}>Rp. 25.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={Product7} style={styles.image} />
            <View style={styles.detailProduct}>
              <Text style={styles.productName}>Nike shoes Savaleos</Text>
              <Gap height={6} />
              <Text style={styles.productQty}>1 Barang</Text>
              <Gap height={13} />
              <View style={styles.line} />
              <Gap height={10} />
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Total Bayar</Text>
                <Text style={styles.productTotal}>Rp. 25.000</Text>
              </View>
            </View>
          </View>
        </View>
        <Gap height={5} />
        <View style={styles.deliveryContainer}>
          <Text style={styles.labelBold}>Pilih Jasa Pengiriman</Text>
          <Gap height={8} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.borderForm}
            onPress={() => setIsShow(!isShow)}>
            <Text style={styles.text}>Pilih Jasa Pengiriman</Text>
            <IcArrowRightBlack />
          </TouchableOpacity>
        </View>
        <Gap height={5} />
        <View style={styles.promoContainer}>
          <Text style={styles.labelBold}>Masukkan Promo</Text>
          <Gap height={8} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.borderForm}
            onPress={() => setIsShowPromo(!isShowPromo)}>
            <Text style={styles.text}>Masukkan Promo</Text>
            <IcArrowRightBlack />
          </TouchableOpacity>
        </View>
        <Gap height={5} />
        <View style={styles.detailContainer}>
          <Text style={styles.labelBold}>Ringkasan Belanja</Text>
          <Gap height={16} />
          <View>
            <View style={styles.contentDetail}>
              <Text style={styles.labelDetail}>Harga</Text>
              <Text style={styles.valueDetail}>Rp 20.000</Text>
            </View>
            <View style={styles.contentDetail}>
              <Text style={styles.labelDetail}>Ongkos Kirim</Text>
              <Text style={styles.valueDetail}>Rp 20.000</Text>
            </View>
            <View style={styles.contentDetail}>
              <Text style={styles.labelDetail}>Diskon</Text>
              <Text style={styles.valueDetail}>- Rp 10.000</Text>
            </View>
            <View style={styles.contentDetail}>
              <Text style={styles.labelDetail}>Promo</Text>
              <Text style={styles.valueDetail}>- Rp 5.000</Text>
            </View>
            <View style={styles.line} />
            <Gap height={15} />
            <View style={styles.contentDetail}>
              <Text style={styles.labelTotal}>Total Bayar</Text>
              <Text style={styles.valueTotal}>Rp 25.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            text="Pilih Pembayaran"
            borderRadius={8}
            onPress={() => navigation.navigate('TransactionSuccess')}
          />
        </View>
      </ScrollView>

      <SlidingUpPanel
        title="Pilih Pengiriman"
        show={isShow}
        closePopup={close}
        data={data}
      />

      <SlidingUpPanel
        title="Pilih Promo"
        show={isShowPromo}
        closePopup={closePromo}
        data={dataPromo}
        type="Promo"
      />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  addressContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: normalize(15),
    paddingTop: normalize(16),
    paddingBottom: normalize(24),
  },
  productContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(16),
  },
  deliveryContainer: {
    backgroundColor: '#FFFFFF',
    padding: normalize(15),
  },
  promoContainer: {
    backgroundColor: '#FFFFFF',
    padding: normalize(15),
  },
  detailContainer: {
    backgroundColor: '#FFFFFF',
    padding: normalize(15),
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  labelBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  labelChange: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#4584FF',
    textDecorationLine: 'underline',
  },
  typeAddress: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  detail: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#747474',
  },
  illustration: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: normalize(40),
    paddingBottom: normalize(25),
  },
  card: {
    flexDirection: 'row',
    paddingHorizontal: normalize(12.5),
    paddingBottom: normalize(14),
    paddingTop: normalize(11),
    borderWidth: 1,
    borderRadius: normalize(10),
    borderColor: '#EFEFEF',
    marginBottom: normalize(5),
  },
  image: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(5),
  },
  detailProduct: {
    flex: 1,
    paddingLeft: normalize(10),
    paddingTop: normalize(20),
  },
  productName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  productQty: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  line: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  productTotal: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  borderForm: {
    backgroundColor: '#EFEFEF',
    paddingLeft: normalize(15),
    paddingRight: normalize(21),
    paddingVertical: normalize(17),
    borderRadius: normalize(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  contentDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(15),
  },
  labelDetail: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  valueDetail: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  labelTotal: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(12),
    color: '#3D3D3D',
    textTransform: 'uppercase',
  },
  valueTotal: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  button: {
    paddingHorizontal: normalize(32),
    backgroundColor: '#FFFFFF',
    paddingBottom: normalize(40),
  },
});
