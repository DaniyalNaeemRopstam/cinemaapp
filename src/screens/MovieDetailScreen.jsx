import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native';
import { CustomButton } from '../components/uiComps/CustomButton';
import { width } from '../assets/config/space';
const genres = ['Action', 'Thriller', 'Science', 'Fiction'];

const MovieAppScreen = ({ route }) => {
    const [selectedGenre, setSelectedGenre] = useState(genres[0]);
    const { item, backgroundImage } = route.params;
    const handleGenrePress = (genre) => {
        setSelectedGenre(genre);
        // Handle genre selection logic here
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleGenrePress(item)}>
            <Text style={{ padding: 10 }}>{item}</Text>
        </TouchableOpacity>
    );

    const movieOverviewText = `
    History's worst tyrants and criminals have masterminded their own plots. Time travel, discovering origins of historical figures like King Tut. Based on the comic book 'The Secret Service' by Mark Millar and Dave Gibbons.
  `;

    return (
        <View>
            <Image source={{ uri: backgroundImage }} style={{ width: 200, height: 200 }} />
            <Image
                source={{ uri: 'https://example.com/movie-poster.jpg' }}
                style={{ width: 200, height: 300 }}
            />

            {/* Buttons */}
            <CustomButton
                title='Get the Ticket'
                onPress={() => { }}
                style={{width:'60%'}}
            />
            <TouchableOpacity onPress={() => console.log('Watch Trailer pressed')}>
                <Text>Watch Trailer</Text>
            </TouchableOpacity>

            {/* Genre Selector */}
            <FlatList
                data={genres}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                horizontal
            />

            {/* Movie Overview */}
            <ScrollView>
                <Text>{movieOverviewText}</Text>
            </ScrollView>
        </View>
    );
};

export default MovieAppScreen;
