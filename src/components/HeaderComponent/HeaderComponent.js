import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import styles from './styles';
import Svgs from '../../assets/graphics/svgs';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <Text style={[styles.desc, titleStyle]}>{desc}</Text>
          </>
        ) : (
          <View style={localStyles.searchContainer}>
            <Icon name="search" size={30} color="#888" />
            <TextInput
              placeholder="TV shows, movies and more"
              style={localStyles.searchInput}
            />
            <TouchableOpacity onPress={() => setShowSearch(false)}>
              <Icon name="times-circle" size={30} color="#888" /> 
            </TouchableOpacity>
          </View>
        )}
      </View>
      {RightIcon && (
        <TouchableOpacity onPress={handleRightIconPress} style={styles.rightIconContainer}>
          <RightIcon />
          {type === 'notification' && (
            <View style={styles.dotContainer}>
              <Svgs.dot />
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
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});

export default HeaderComponent;
