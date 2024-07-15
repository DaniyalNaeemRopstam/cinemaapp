import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import styles from './styles';
import Svgs from '../../assets/graphics/svgs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { HP, WP } from '../../assets/config/space';
import colors from '../../assets/config/colors';

const HeaderComponent = ({
  title,
  desc,
  titlePosition = 'left',
  titleStyle,
  containerStyle,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onLeftIconPress,
  onRightIconPress,
  type,
  searchText,
  setSearchText,
  ...props
}) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleRightIconPress = () => {
    setShowSearch(!showSearch);
    if (onRightIconPress) {
      onRightIconPress();
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {LeftIcon && (
        <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIconContainer}>
          <LeftIcon />
        </TouchableOpacity>
      )}
      <View style={[styles.titleContainer, titlePosition === 'center' && styles.titleCenter]}>
        {!showSearch ? (
          <>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            {desc && <Text style={[styles.desc, titleStyle]}>{desc}</Text>}
          </>
        ) : (
          <View style={localStyles.searchContainer}>
            <AntDesignIcon name="search1" size={20} color={colors.black} />
            <TextInput
              placeholder="TV shows, movies and more"
              style={localStyles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity onPress={() => {setShowSearch(false);onRightIconPress();}}>
              <AntDesignIcon name="close" size={20} color={colors.black} /> 
            </TouchableOpacity>
          </View>
        )}
      </View>
      {RightIcon && (
        <TouchableOpacity onPress={handleRightIconPress} style={styles.rightIconContainer}>
          {!showSearch && <RightIcon />}
          {type === 'notification' && (
            <View style={styles.dotContainer}>
              <Svgs.dots />
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F6',
    paddingHorizontal: WP(4),
    paddingVertical:Platform.OS === 'android' ? HP(0.5) : HP(1.5),
    zIndex:2,
    borderRadius:WP(10)
  },
  searchInput: {
    flex: 1,
    marginLeft:WP(2)
  },
});

export default HeaderComponent;
