import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import colors from '../../assets/config/colors';
import { WP, HP, mvs } from '../../assets/config/space';
import ChairIconSVG from '../../assets/graphics/svgs/ChariIconSvg';
import images from '../../assets/graphics/images';

const fetchSeatData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                vipSeats: ['9-0', '9-1', '9-2', '9-3', '9-4', '9-5'],
                unavailableSeats: ['9-2', '9-3', '1-0', '1-1', '2-0', '5-0', '3-3', '6-18'],
            });
        }, 100);
    });
};

const createInitialSeats = (vipSeats, unavailableSeats) => {
    const seats = [];
    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 24; j++) {
            const id = `${i}-${j}`;
            let status = 'available';

            if (unavailableSeats.includes(id)) {
                status = 'unavailable';
            } else if (vipSeats.includes(id)) {
                status = 'VIP';
            } else if (!vipSeats.includes(id) && i === 9) {
                status = 'VIP';
            }

            row.push({ id, status });
        }
        seats.push(row);
    }
    return seats;
};

const SeatingPlan = ({ selectedSeats, setSelectedSeats, removeSeatIndex }) => {
    const [seats, setSeats] = useState([]);
    const [loading, seLoading] = useState(true);

    useEffect(() => {
        if (removeSeatIndex) {
            toggleSeatSelection(removeSeatIndex.rowIndex, removeSeatIndex.seatIndex)
        }
    }, [removeSeatIndex])


    useEffect(() => {
        const initializeSeats = async () => {
            const seatData = await fetchSeatData();
            const initialSeats = createInitialSeats(
                seatData.vipSeats,
                seatData.unavailableSeats
            );
            setSeats(initialSeats);
            seLoading(false)
        };
        initializeSeats();
    }, []);

    const toggleSeatSelection = (rowIndex, seatIndex) => {
        setSeats((prevSeats) => {
            const newSeats = [...prevSeats];
            const seat = newSeats[rowIndex][seatIndex];

            if (seat.status === 'available' || seat.status === 'VIP') {
                seat.status = 'selected';
            } else if (seat.status === 'selected') {
                seat.status = rowIndex === 9 ? 'VIP' : 'available';
            }

            return newSeats;
        });

        setSelectedSeats((prevSelected) => {
            const id = `${rowIndex}-${seatIndex}`;
            if (prevSelected.includes(id)) {
                return prevSelected.filter((seatId) => seatId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const getSeatColor = (status) => {
        switch (status) {
            case 'available':
                return colors.primary;
            case 'unavailable':
                return colors.gray;
            case 'selected':
                return colors.yellow;
            case 'VIP':
                return colors.purple;
            default:
                return colors.gray;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={images.shadowLayer} style={styles.shadowLayer} />
                <Text style={styles.screenText}>SCREEN</Text>
            </View>

            {
                loading ?
                    <ActivityIndicator size={WP(5)} color={colors.primary} />
                    :
                    <>
                        {seats.map((row, rowIndex) => (
                            <View key={rowIndex} style={styles.row}>
                                <Text style={styles.rowNumber}>{rowIndex + 1}</Text>
                                {row.map((seat, seatIndex) => (
                                    <TouchableOpacity
                                        key={seat.id}
                                        onPress={() => toggleSeatSelection(rowIndex, seatIndex)}
                                        style={styles.seatWrapper}
                                        disabled={seat.status === 'unavailable'} // Disable gap and unavailable seats
                                    >
                                        <View style={styles.seatRow}>
                                            <ChairIconSVG color={getSeatColor(seat.status)} size={WP(2.7)} />
                                            {((seatIndex > 3 && seatIndex < 5) || (seatIndex > 17 && seatIndex < 19)) && (
                                                <View style={styles.stairsGap} />
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </>
            }


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: HP(0.5),
    },
    rowNumber: {
        marginRight: WP(2),
        fontSize: mvs(12),
        fontFamily: 'Lato-Regular',
        color: colors.black,
    },
    seatWrapper: {
        marginHorizontal: WP(0.4),
    },
    header: {
        width: WP(90),
        position: 'relative',
    },
    shadowLayer: {
        width: WP(90),
        resizeMode: 'contain',
    },
    screenText: {
        position: 'absolute',
        bottom: WP(7),
        width: '100%',
        textAlign: 'center',
        fontSize: mvs(10),
    },
    seatRow: {
        flexDirection: 'row',
    },
    stairsGap: {
        backgroundColor: colors.backgroundColor,
        width: WP(3.5),
        height: HP(1),
    },
    selectedSeatsText: {
        marginTop: HP(2),
        fontSize: mvs(14),
        fontFamily: 'Lato-Regular',
        color: colors.black,
    },
});

export default SeatingPlan;
