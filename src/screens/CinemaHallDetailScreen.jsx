import { StyleSheet, Text, View, Alert, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import colors from '../assets/config/colors';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import svgs from '../assets/graphics/svgs';
import { HP, WP, mvs } from '../assets/config/space';
import SeatingPlan from '../components/SeatingPlan/SeatingPlan';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withTiming } from 'react-native-reanimated';
import SeatsPriceInfo from '../components/SeatsPriceInfo/SeatsPriceInfo';
import Svgs from '../assets/graphics/svgs';
import { CustomButton } from '../components/uiComps/CustomButton';

let WIDTH = Dimensions.get('window').width
let HEIGHT = Dimensions.get('window').height



const CinemaHallDetailScreen = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [removeSeatIndex, setRemoveSeatIndex] = useState(null);
    const scale = useSharedValue(1);
    const translationX = useSharedValue(0);
    const translationY = useSharedValue(0);

    const panRef = useRef(null);
    const pinchRef = useRef(null);

    const handleZoomIn = () => {
        if (scale.value < 2.4) {
            scale.value = withTiming(scale.value + 0.2);
        }
    };

    const handleZoomOut = () => {
        if (scale.value > 1) {
            scale.value = withTiming(scale.value - 0.2);
        }
    };

    const panGestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = translationX.value;
            ctx.startY = translationY.value;
        },
        onActive: (event, ctx) => {
            const newTranslateX = ctx.startX + event.translationX;
            const newTranslateY = ctx.startY + event.translationY;

            const containerWidth = WIDTH;
            const containerHeight = HEIGHT * 0.5;

            const maxTranslateX = (containerWidth / 2) * (scale.value - 1);
            const maxTranslateY = (containerHeight / 2) * (scale.value - 1);

            translationX.value = Math.max(Math.min(newTranslateX, maxTranslateX), -maxTranslateX);
            translationY.value = Math.max(Math.min(newTranslateY, maxTranslateY), -maxTranslateY);
        },
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: scale.value },
                { translateX: translationX.value },
                { translateY: translationY.value },
            ],
        };
    });

    

    const renderItem = ({ item }) => {
        const [row, seat] = item.split('-');
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.text}>{parseInt(seat) + 1} / {parseInt(row) + 1} row</Text>
                <TouchableOpacity onPress={() => {setRemoveSeatIndex({rowIndex:parseInt(row), seatIndex:parseInt(seat)}) }}>
                    <Svgs.corssIcon />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <MainLayout statusbarBackgrund={colors.white} bottomColor={colors.white}>
            <HeaderComponent
                title="The King’s Man"
                desc="March 5, 2021  I  12:30 hall 1"
                titlePosition="center"
                leftIcon={svgs.arrowBack}
                onLeftIconPress={() => { }}
                containerStyle={styles.header}
            />
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Animated.View style={styles.zoomableView}>
                        <PanGestureHandler
                            ref={panRef}
                            onGestureEvent={panGestureHandler}
                        >
                            <Animated.View style={[styles.zoomableView, animatedStyle]}>
                                <SeatingPlan
                                    selectedSeats={selectedSeats}
                                    setSelectedSeats={setSelectedSeats}
                                    removeSeatIndex={removeSeatIndex}
                                />
                            </Animated.View>
                        </PanGestureHandler>
                    </Animated.View>
                    <View style={styles.controls}>
                        <TouchableOpacity onPress={handleZoomIn} style={styles.controlButton}>
                            <Text style={styles.controlButtonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleZoomOut} style={styles.controlButton}>
                            <Text style={styles.controlButtonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>

                    <SeatsPriceInfo
                        vipPrice={150}
                        regularPrice={50}
                    />

                    <View>
                        <FlatList
                            data={selectedSeats}
                            renderItem={renderItem}
                            keyExtractor={(item) => item}
                            horizontal
                            contentContainerStyle={styles.listContainer}
                        />
                    </View>

                    <View style={styles.footerContainer} >
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceText}>Total Price</Text>
                            <Text style={styles.price}>$ 50</Text>
                        </View>
                        <CustomButton
                            title='Proceed to pay'
                            onPress={()=>{}}
                            style={styles.button}
                        />
                    </View>


                </View>
            </View>
        </MainLayout>
    );
};

export default CinemaHallDetailScreen;

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
    container2: {
        width: '100%',
        height: HP(50),
        backgroundColor: colors.backgroundColor,
        overflow: 'hidden',
    },
    zoomableView: {
        flex: 1,
        justifyContent: 'center',
    },
    controls: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
    },
    controlButton: {
        backgroundColor: colors.white,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    controlButtonText: {
        fontSize: mvs(20),
        color: colors.black,
    },
    footer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    listContainer: {
        padding: HP(2),
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.radioInner,
        borderRadius: WP(2),
        paddingHorizontal: WP(3),
        paddingVertical: HP(1),
        marginHorizontal: WP(1),
    },
    text: {
        fontSize: mvs(14),
        fontFamily: 'Lato-Regular',
        color: colors.black,
        marginRight: WP(2),
    },
    priceContainer:{
        backgroundColor:colors.radioInner,
        paddingVertical: HP(1),
        paddingLeft: WP(4),
        width:'36%',
        borderRadius:WP(3)

    },
    footerContainer:{
        marginTop:'auto',
        paddingHorizontal:WP(4),
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        width:'60%',
    },
    priceText:{
        fontSize:mvs(14),
    },
    price:{
        fontSize:mvs(16),
        fontWeight:'700'
    }
});
