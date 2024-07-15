// src/screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MainLayout from '../layouts/MainLayout';
import colors from '../assets/config/colors';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import svgs from '../assets/graphics/svgs';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('MovieDetail', {
      item,
      backgroundImage: 'url("https://picsum.photos/200")',  // Add your image URL here
    });
  };

  const Item = ({ name, backgroundImage, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <ImageBackground source={{ uri: backgroundImage }} style={styles.imageBackground}>
          <Text style={styles.text}>{name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <Item
      name={item.title}
      backgroundImage={item.backgroundImage}
      onPress={() => handlePress(item)}
    />
  );

  const DATA = [
    {
      id: '1',
      title: 'First Item',
      backgroundImage: 'https://picsum.photos/200',
    },
    {
      id: '2',
      title: 'Second Item',
      backgroundImage: 'https://picsum.photos/200',
    },
    {
      id: '3',
      title: 'Third Item',
      backgroundImage: 'https://picsum.photos/200',
    },
    {
      id: '4',
      title: 'Fourth Item',
      backgroundImage: 'https://picsum.photos/200',
    },
    {
      id: '5',
      title: 'Fifth Item',
      backgroundImage: 'https://picsum.photos/200',
    },
  ];

  return (
    <MainLayout statusbarBackgrund={colors.white} bottomColor={colors.white}>
      <HeaderComponent
        title="Home"
        titlePosition="right"
        containerStyle={styles.header}
        rightIcon={svgs.search}
      />
      <FlatList
        data={DATA}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    zIndex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    height: 150, // Adjust the height as needed
    borderRadius: 10, // Adjust the border radius as needed
    overflow: 'hidden', // Ensure the border radius is applied to the ImageBackground
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover', // Ensure the image covers the background
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'left',
    padding: 10,
    marginTop: 80,
  },
});
