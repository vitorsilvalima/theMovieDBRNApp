import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const MenuItem = ({ item, onPress }) => {
  const { icon, title } = item
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.menuItem} >
        <Image source={icon}  style={styles.menuItemIcon}/>
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const MenuSeparator = () =>( <View style={styles.menuSeparator} />)
const Menu = ({ itens, onPress }) => {
  return (
    <View style={styles.menuView}>
      <FlatList
        keyExtractor={(item) => `${item.title}`}
        data={itens}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <MenuItem  item={item} onPress={onPress}/>}
        ItemSeparatorComponent={MenuSeparator}
        horizontal
      />
    </View>
  )
}

Menu.defaultProps = {
  onPress: () => null,
};

Menu.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tmdbUrl: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
  })).isRequired,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  menuItem: {
    width: 100, 
    height: 100, 
    backgroundColor: '#a30000',
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'space-between', 
    borderRadius: 5,
  },
  menuSeparator: {
    width: 10,
    height: 100
  },
  menuItemIcon: {
    width: 30,
    height: 30
  },
  menuItemText: {
    color: 'white',
    fontSize: 14,
    width: 70 
  },
  menuView: {
    height: 100,
    position: 'absolute',
    bottom: 20,
    left: 10
  }
})
export default Menu;
