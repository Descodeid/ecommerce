import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcCopy, Product7} from '../../assets';
import {Gap, Header} from '../../components';

const DetailTransaction = () => {
  return (
    <View style={styles.page}>
      <Header text="Detail Pesanan" />
      <ScrollView style={styles.container}>
        <View style={styles.statusContainer}>
          <View style={styles.statusContent}>
            <Text style={styles.label}>Status Pemesanan</Text>
            <View style={styles.badge}>
              <Text style={styles.textBadge}>Selesai</Text>
            </View>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.label}>Tanggal</Text>
            <Text style={styles.value}>Selasa, 22 April 2019 14.22 WIB</Text>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.label}>Status Pemesanan</Text>
            <View style={styles.invoiceContainer}>
              <Text style={styles.value}>INV/20210413/MPL1169511603</Text>
              <Gap width={13} />
              <IcCopy />
            </View>
          </View>
        </View>
        <Gap height={10} />
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
        <Gap height={10} />
        <View style={styles.userContainer}>
          <Text style={styles.label}>Dikirim Ke</Text>
          <Gap height={8} />
          <Text style={styles.userPlace}>Rumah</Text>
          <Gap height={8} />
          <Text style={styles.userName}>Fulan bin fulan</Text>
          <Gap height={6} />
          <Text style={styles.userPhone}>087232272626</Text>
          <Gap height={6} />
          <Text style={styles.userAddress}>
            Jl. Lorem ipsum dolor sit amet, No. 17 adipiscing elit. In nisi,
            velit facilisis donec. In eget enim eget viverra vulputate quam sed
            mus.
          </Text>
        </View>
        <Gap height={10} />
        <View style={styles.ekspedisiContainer}>
          <View style={styles.titleEkpedisi}>
            <Text style={styles.title}>Jasa Pengiriman</Text>
            <Text style={styles.status}>Lihat Status</Text>
          </View>
          <Gap height={13} />
          <Text style={styles.typeEkpedisi}>
            J&T Expres Rp 20.000 (2 - 3 hari)
          </Text>
          <Gap height={15} />
          <Text style={styles.title}>No Resi</Text>
          <Gap height={13} />
          <Text style={styles.typeEkpedisi}>348892373293933234</Text>
        </View>
        <Gap height={10} />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>Informasi Pembayaran</Text>
          <Gap height={15} />
          <Text style={styles.labelDetail}>COD (Bayar Ditempat)</Text>
          <Gap height={15} />
          <View style={styles.line} />
          <Gap height={15} />
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
      </ScrollView>
    </View>
  );
};

export default DetailTransaction;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  statusContainer: {
    backgroundColor: '#FFFFFF',
  },
  statusContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(15),
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    borderBottomLeftRadius: normalize(26),
    borderBottomRightRadius: normalize(26),
  },
  invoiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  badge: {
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(4),
    backgroundColor: '#E9F0FF',
    borderRadius: normalize(7),
  },
  textBadge: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#4584FF',
  },
  value: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  productContainer: {
    backgroundColor: '#FFFFFF',
    padding: normalize(15),
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
  userContainer: {
    padding: normalize(15),
    backgroundColor: '#FFFFFF',
  },
  userPlace: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  userName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  userPhone: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  userAddress: {
    fontFamily: 'OpenSans-Light',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  ekspedisiContainer: {
    backgroundColor: '#FFFFFF',
    padding: normalize(15),
  },
  titleEkpedisi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  status: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#4584FF',
    textDecorationLine: 'underline',
  },
  typeEkpedisi: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  detailContainer: {
    backgroundColor: '#FFFFFF',
    padding: normalize(15),
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
});
