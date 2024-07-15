// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MainLayout from '../layouts/MainLayout';
import colors from '../assets/config/colors';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import svgs from '../assets/graphics/svgs';
import { HP } from '../assets/config/space';
import MovieCard from '../components/MovieCard/MovieCard';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

const HomeScreen = () => {
  const [movieList,setMovieList] = useState([])
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  // useEffect(()=>{
  //   fetchMovieData()
  // },[])
  
  // const fetchMovieData = async() =>{
  //   const response = await axiosWrapper('GET', 'https://api.themoviedb.org/3/movie/upcoming?api_key=123456abcdefg');
  //   setMovieList(response);
  // }

  const handlePress = (item) => {
    navigation.navigate('MovieDetail', {
      item,
      backgroundImage: "https://picsum.photos/800",  // Add your image URL here
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

  const renderSearchItem = ({ item }) => (
    <MovieCard 
      title={item.title} 
      genre={item.genre} 
      image={item.image} 
      onPress={()=> handlePress(DATA[0])}
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

  const handleRightIconPress = () => {
    setSearchText('')
    setShowSearch(!showSearch)
  }

  const searchedMovies = [
    { id: '1', title: 'Timless', genre: 'Fantasy', image: 'https://picsum.photos/200' },
    { id: '2', title: 'Movie 2', genre: 'Action', image: 'https://picsum.photos/200' },
    // Add more movie data here
  ];

  return (
    <MainLayout statusbarBackgrund={colors.white} bottomColor={colors.white}>
      <HeaderComponent
        title="Watch"
        titlePosition="right"
        containerStyle={styles.header}
        rightIcon={svgs.search}
        onRightIconPress={handleRightIconPress}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {
        searchText === '' ?
          <FlatList
            data={DATA}
            numColumns={showSearch ? 2 : 1}
            key={showSearch ? 2 : 1}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
          :
          <FlatList
            data={searchedMovies}
            renderItem={renderSearchItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
      }

    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    zIndex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: '2%',
    height: 150, // Adjust the height as needed
    borderRadius: 10, // Adjust the border radius as needed
    overflow: 'hidden', // Ensure the border radius is applied to the ImageBackground
    minWidth: '46%'
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
  contentContainerStyle: {
    backgroundColor: colors.backgroundColor,
    flexGrow: 1,
    paddingTop: HP(2)
  }
});
