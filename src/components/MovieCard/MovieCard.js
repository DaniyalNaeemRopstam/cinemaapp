import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../assets/config/colors';
import { WP, HP, mvs } from '../../assets/config/space';
import fontFamily from '../../assets/config/fontFamily';
import Svgs from '../../assets/graphics/svgs';

const MovieCard = ({ title, genre, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.genre}>{genre}</Text>
      </View>
      <TouchableOpacity style={styles.icon}>
        <Svgs.dots />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: WP(4),
    padding: WP(4),
    alignItems: 'center',
    marginBottom: HP(1),
  },
  image: {
    width: WP(30),
    height: HP(10),
    borderRadius: WP(4),
  },
  textContainer: {
    marginLeft: WP(4),
  },
  title: {
    fontSize: mvs(18),
    fontFamily: fontFamily.LatoBold,
    color: colors.black,
  },
  genre: {
    fontSize: mvs(14),
    fontFamily: fontFamily.LatoRegular,
    color: colors.gray,
    marginTop: HP(0.5),
  },
  icon: {
    marginLeft: 'auto',
    paddingVertical: HP(2)
  },
});

export default MovieCard;
