import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {
  IcHome,
  IcHomeActive,
  IcProfile,
  IcProfileActive,
  IcQuran,
  IcQuranActive,
  IcTransaction,
  IcTransactionActive,
} from '../../../assets';

const Icon = ({label, active}) => {
  switch (label) {
    case 'Home':
      return active ? (
        <Image source={IcHomeActive} />
      ) : (
        <Image source={IcHome} />
      );
    case 'Transaksi':
      return active ? <IcTransactionActive /> : <IcTransaction />;
    case "Al-Qur'an":
      return active ? <IcQuranActive /> : <IcQuran />;
    case 'Profile':
      return active ? <IcProfileActive /> : <IcProfile />;

    default:
      <IcHomeActive />;
  }
  return <IcHomeActive />;
};

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.menu}>
              <Icon label={label} active={isFocused} />
              <Text style={styles.text(isFocused)}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: normalize(15),
    paddingBottom: normalize(12),
    paddingHorizontal: normalize(42),
    justifyContent: 'space-between',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    elevation: 10,
  },
  text: isFocused => ({
    fontFamily: isFocused ? 'OpenSans-Bold' : 'OpenSans-Regular',
    fontSize: normalize(12),
    color: isFocused ? '#4584FF' : '#747474',
    paddingTop: normalize(8),
    lineHeight: normalize(16),
  }),
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
