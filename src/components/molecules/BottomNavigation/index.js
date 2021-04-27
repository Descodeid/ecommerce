import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Account,
  AccountActive,
  Courses,
  CoursesActive,
  Home,
  HomeActive,
  Search,
  SearchActive,
} from '../../../assets';

const Icon = ({label, active}) => {
  switch (label) {
    case 'Home':
      return active ? <HomeActive /> : <Home />;
    case 'Explore':
      return active ? <SearchActive /> : <Search />;
    case 'Courses':
      return active ? <CoursesActive /> : <Courses />;
    case 'Account':
      return active ? <AccountActive /> : <Account />;

    default:
      <HomeActive />;
  }
  return <HomeActive />;
};

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
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
            {isFocused && <Text style={styles.text(isFocused)}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FCFCFF',
    paddingTop: 25,
    paddingBottom: 23,
    paddingHorizontal: 35,
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: isFocused => ({
    fontFamily: 'DMSans-Regular',
    fontSize: 10,
    color: '#FF8181',
    paddingTop: isFocused ? 5 : 0,
  }),
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
