import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, FlatList, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { CustomButton } from '../components/uiComps/CustomButton';
import colors from '../assets/config/colors';
import { WP, HP, mvs, width } from '../assets/config/space';
import fontFamily from '../assets/config/fontFamily';
import Svgs from '../assets/graphics/svgs';

const genres = [
    { name: 'Action', color: colors.action },
    { name: 'Thriller', color: colors.thriller },
    { name: 'Science', color: colors.science },
    { name: 'Fiction', color: colors.fiction }
  ];

const MovieAppScreen = ({ navigation, route }) => {
    const [selectedGenre, setSelectedGenre] = useState(genres[0]);
    const { item, backgroundImage } = route.params;

    const handleGenrePress = (genre) => {
        setSelectedGenre(genre);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleGenrePress(item)} style={[styles.genreButton, { backgroundColor: item.color }]}>
          <Text style={styles.genreText}>{item.name}</Text>
        </TouchableOpacity>
      );

    const movieOverviewText = `As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them. Discover the origins of the very first independent intelligence agency in The King's Man. The Comic Book “The Secret Service” by Mark Millar and Dave Gibbons.`;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar translucent={true} backgroundColor={colors.transparent} />
            <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage}>
                <View style={styles.backgroundImageContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                        <Svgs.arrowBackWhite />
                        <Text style={styles.watch}>Watch</Text>
                    </TouchableOpacity>

                <View style={styles.buttonContainer}>
                    <Text style={styles.movieTitle}>King's Man</Text>
                    <Text style={styles.releaseDate}>In Theaters December 22, 2021</Text>
                    <CustomButton
                        title='Get Tickets'
                        onPress={() => { }}
                        style={styles.getTicketsButton}
                        txtStyle={styles.getTicketsButtonText}
                    />
                    <CustomButton
                        title='Watch Trailer'
                        onPress={() => { }}
                        style={styles.watchTrailerButton}
                        txtStyle={styles.watchTrailerButtonText}
                        Icon={<Svgs.playIcon/>}
                    />
                </View>
                </View>
            </ImageBackground>
            <View style={styles.contentContainer}>
                <Text style={styles.sectionTitle}>Genres</Text>
                <FlatList
                    data={genres}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                    horizontal
                    style={styles.genreList}
                />

                <View style={styles.divider} />
                <Text style={styles.sectionTitle}>Overview</Text>
                <Text style={styles.overviewText}>{movieOverviewText}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
    },
    backgroundImage: {
        width: '100%',
        height: HP(60),
        justifyContent: 'flex-start',
    },
    backgroundImageContainer:{
        padding:WP(4),
        flex:1
    },
    backButton: {
        marginTop: HP(5),
        marginLeft: WP(4),
        flexDirection:'row',
        alignItems:'center',
    },
    watch:{
        color:colors.white,
        fontSize:mvs(18),
        marginLeft:WP(4),
        fontWeight:'500'
    },
    buttonContainer:{
        marginTop:'auto',
        paddingHorizontal:WP(8)
    },
    contentContainer: {
        padding: WP(4),
    },
    movieTitle: {
        fontSize: mvs(24),
        fontFamily: fontFamily.LatoBold,
        color: colors.black,
        textAlign: 'center',
        marginVertical: HP(1),
    },
    releaseDate: {
        fontSize: mvs(14),
        fontFamily: fontFamily.LatoRegular,
        color: colors.gray,
        textAlign: 'center',
        marginBottom: HP(2),
    },
    getTicketsButton: {
        backgroundColor: colors.primary,
        borderRadius: WP(2),
        marginBottom: HP(1.5),
    },
    getTicketsButtonText: {
        fontSize: mvs(16),
        fontFamily: fontFamily.LatoBold,
        color: colors.white,
        fontWeight:'600',
    },
    watchTrailerButton: {
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: WP(2),
        alignItems: 'center',
        marginBottom: HP(2),
        backgroundColor:colors.transparent,
        fontWeight:'600',
    },
    watchTrailerButtonText: {
        fontSize: mvs(16),
        fontFamily: fontFamily.LatoBold,
        color: colors.white,
        fontWeight:'600',
        marginLeft:WP(2)
    },
    divider:{
        height:HP(1),
        borderBottomColor:colors.grayBorder,
        borderBottomWidth:1,
        marginBottom:HP(2)
    },
    sectionTitle: {
        fontSize: mvs(16),
        fontFamily: fontFamily.LatoBold,
        color: colors.black,
        marginBottom: HP(1),
        fontWeight:'700'
    },
    genreList: {
        marginBottom: HP(2),
    },
    genreButton: {
        backgroundColor: colors.lightGrey,
        borderRadius: WP(10),
        paddingHorizontal: WP(4),
        paddingVertical: HP(1),
        marginRight: WP(2),
    },
    genreText: {
        fontSize: mvs(14),
        fontFamily: fontFamily.LatoRegular,
        color: colors.white,
    },
    overviewText: {
        fontSize: mvs(14),
        fontFamily: fontFamily.LatoRegular,
        color: colors.black,
    },
});

export default MovieAppScreen;
