import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../../assets/config/colors';
import { WP, HP, mvs } from '../../assets/config/space';
import fontFamily from '../../assets/config/fontFamily';
import images from '../../assets/graphics/images';
import constants from '../../assets/config/constants';


const SeatSelectionListingComponent = ({ selectedDateIndex, selectedHall, setSelectedHall  }) => {
    const items = constants.seatsListingData[selectedDateIndex];

    const handleSelect = (index) => {
        setSelectedHall(index);
    };

    const renderItem = ({ item, index }) => (
        <View>
            <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text style={styles.hallText}>{item.hall}</Text>
            </View>
            <TouchableOpacity
                onPress={() => handleSelect(index)}
                style={[
                    styles.itemContainer,
                    selectedHall === index && styles.selectedItemContainer,
                ]}>
                <Image source={images.listingImage} style={styles.image} />

            </TouchableOpacity>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>From <Text style={styles.boldText}>{item.price}</Text> or <Text style={styles.boldText}>{item.bonus} bonus</Text></Text>
            </View>
        </View>
    );

    return (
        <View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                bounces={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingLeft: WP(4),
    },
    itemContainer: {
        backgroundColor: colors.white,
        borderRadius: WP(2),
        padding: WP(2),
        marginRight: WP(4),
        alignItems: 'center',
        justifyContent:'center',
        height: HP(24),
        width: WP(70),
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    selectedItemContainer: {
        borderColor: colors.primary,
        borderWidth: 2,
    },
    timeContainer:{
        flexDirection: 'row',
        alignItems:'center',
    },
    timeText: {
        fontSize: mvs(14),
        fontFamily: fontFamily.LatoBold,
        color: colors.black,
        marginBottom: HP(0.5),
    },
    hallText: {
        fontSize: mvs(12),
        fontFamily: fontFamily.LatoRegular,
        color: colors.gray,
        marginBottom: HP(0.5),
        marginLeft:WP(2)
    },
    image: {
        width: WP(50),
        height: HP(20),
        marginBottom: HP(0.5),
        resizeMode:'contain',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:HP(1)
    },
    priceText: {
        fontSize: mvs(12),
        fontFamily: fontFamily.LatoRegular,
        color: colors.gray,
    },
    boldText: {
        fontFamily: fontFamily.LatoBold,
        color: colors.black,
    },
});

export default SeatSelectionListingComponent;
