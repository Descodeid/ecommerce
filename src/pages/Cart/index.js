import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Button, Counter, Gap, Header, Number} from '../../components';

const Cart = ({navigation}) => {
  const [checkedId, setCheckId] = React.useState(-1);
  const [checkAll, setCheckAll] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [selected, setSelected] = React.useState([]);

  const [productCart] = React.useState([
    {
      id: 0,
      name: 'Nike Air Max',
      image: 'http://placeimg.com/640/480/tech/grayscale',
      type: 'diskon',
      price: 900000,
      discount: 50,
      qty: 1,
      checked: false,
    },
    {
      id: 1,
      name: 'Nike React 270',
      image: 'http://placeimg.com/640/480/tech/grayscale',
      type: 'normal',
      price: 900000,
      discount: 0,
      qty: 1,
      checked: false,
    },
  ]);

  const handleCheck = id => {
    setCheckId({id});
    const data = productCart;
    data[id].checked = !data[id].checked;

    // Get Value
    const key = productCart.map(t => t.id);
    const name = productCart.map(t => t.name);
    const image = productCart.map(t => t.image);
    const type = productCart.map(t => t.type);
    const price = productCart.map(t => t.price);
    const discount = productCart.map(t => t.discount);
    const checks = productCart.map(t => t.checked);
    const Selected = [];
    const obj = {};
    for (let i = 0; i < checks.length; i++) {
      if (checks[i] === true) {
        obj.id = key[i];
        obj.name = name[i];
        obj.image = image[i];
        obj.type = type[i];
        obj.price = price[i];
        obj.discount = discount[i];
        Selected.push(obj);
      }
    }
    if (Selected.length === productCart.length) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  };

  const handleCheckAll = () => {
    if (checkAll === true) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }

    const id = productCart.map(t => t.id);
    const name = productCart.map(t => t.name);
    const image = productCart.map(t => t.image);
    const type = productCart.map(t => t.type);
    const price = productCart.map(t => t.price);
    const discount = productCart.map(t => t.discount);
    let Selected = [];
    let obj = {};
    const checks = productCart.map(item => item.checked);
    for (let i = 0; i < checks.length; i++) {
      productCart[i].checked = !productCart[i].checked;

      if (productCart[i].checked === true) {
        obj.id = id[i];
        obj.name = name[i];
        obj.image = image[i];
        obj.type = type[i];
        obj.price = price[i];
        obj.discount = discount[i];
        Selected.push(obj);
      }
    }
    setSelected(Selected);
  };

  const onCounterChange = value => {
    productCart.map(item => {
      if (item.id === value.id) {
        const price =
          item.discount === 0 ? item.price : item.price * (item.discount / 100);
        const hasil = price * value.result;
        console.log(hasil);

        // setTotal(result);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Header text="Keranjang" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.checkBox}>
          <CheckBox
            disabled={false}
            value={checkAll}
            onValueChange={() => handleCheckAll()}
            tintColors={{true: '#4584FF', false: '#4584FF'}}
          />
          <Gap width={13} />
          <Text style={styles.labelCheckbox}>Pilih Semua (2)</Text>
        </View>
        <Text style={styles.deleteAll}>Hapus Semua</Text>
      </View>
      <Gap height={12} />
      <FlatList
        data={productCart}
        renderItem={({item}) => {
          return (
            <View style={styles.cartContainer}>
              <CheckBox
                disabled={false}
                value={item.checked}
                onValueChange={() => handleCheck(item.id)}
                tintColors={{true: '#4584FF', false: '#4584FF'}}
              />
              <Gap width={13} />
              <Image source={{uri: item.image}} style={styles.image} />
              {item.type === 'diskon' && (
                <View style={styles.detail}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Gap height={8} />
                  <Number number={item.price} style={styles.priceDiscount} />
                  <Gap height={6} />
                  <Number
                    number={
                      item.discount === 0
                        ? item.price
                        : item.price * (item.discount / 100)
                    }
                    style={styles.price}
                  />
                  <View style={styles.discount}>
                    <Text style={styles.textDiscount}>-50 %</Text>
                  </View>
                  <View style={styles.circle} />
                  <View style={styles.circle2} />
                </View>
              )}
              {item.type === 'normal' && (
                <View style={styles.detail}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Gap height={6} />
                  <Number
                    number={
                      item.discount === 0
                        ? item.price
                        : item.price * (item.discount / 100)
                    }
                    style={styles.price}
                  />
                </View>
              )}
              <View style={styles.quantity}>
                <Counter onValueChange={onCounterChange} id={item.id} />
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <View>
          <Text style={styles.labelTotal}>Total</Text>
          <Number number={total} style={styles.total} />
        </View>
        <View style={styles.button}>
          <Button
            text="Checkout"
            borderRadius={10}
            fontSize={14}
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(23),
    backgroundColor: '#FFFFFF',
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelCheckbox: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#4584FF',
  },
  deleteAll: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#FF7675',
    textDecorationLine: 'underline',
  },
  cartContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: normalize(15),
    marginBottom: normalize(5),
  },
  image: {
    width: normalize(104, 'width'),
    height: normalize(104, 'height'),
    borderRadius: normalize(5),
  },
  detail: {
    marginLeft: normalize(13),
  },
  name: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  discount: {
    backgroundColor: '#FF7675',
    position: 'absolute',
    top: normalize(22),
    left: normalize(2),
    paddingHorizontal: normalize(6),
    paddingVertical: normalize(2),
    borderRadius: normalize(4),
  },
  textDiscount: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#FFFFFF',
  },
  circle: {
    width: normalize(5.3),
    height: normalize(7),
    position: 'absolute',
    top: normalize(25.865),
    left: normalize(0),
    borderRadius: normalize(7),
    backgroundColor: '#FFFFFF',
  },
  circle2: {
    width: normalize(5.3),
    height: normalize(7),
    position: 'absolute',
    top: normalize(25.865),
    left: normalize(33.5),
    borderRadius: normalize(7),
    backgroundColor: '#FFFFFF',
  },
  priceDiscount: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#747474',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginLeft: normalize(42),
  },
  price: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  quantity: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(20),
  },
  labelTotal: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#747474',
  },
  total: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  button: {
    width: normalize(120),
  },
});
