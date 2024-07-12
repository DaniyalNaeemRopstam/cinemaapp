import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/config/colors'; 
import { WP, HP, mvs } from '../../assets/config/space';
import ChairIconSVG from '../../assets/graphics/svgs/ChariIconSvg';

const SeatsPriceInfo = ({vipPrice, regularPrice}) => {
  return (
    <View style={styles.container}>
      <View style={styles.legendItem}>
        <ChairIconSVG color={colors.yellow} size={WP(5)} />
        <Text style={styles.legendText}>Selected</Text>
      </View>
      <View style={styles.legendItem}>
        <ChairIconSVG color={colors.gray} size={WP(5)} />
        <Text style={styles.legendText}>Not available</Text>
      </View>
      <View style={styles.legendItem}>
        <ChairIconSVG color={colors.purple} size={WP(5)} />
        <Text style={styles.legendText}>VIP ({vipPrice}$)</Text>
      </View>
      <View style={styles.legendItem}>
        <ChairIconSVG color={colors.primary} size={WP(5)} />
        <Text style={styles.legendText}>Regular ({regularPrice}$)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: HP(2),
    backgroundColor: colors.white,
    flexWrap:'wrap',
    rowGap:HP(3)
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'50%',
  },
  legendText: {
    fontSize: mvs(12),
    color: colors.gray,
    fontWeight:'500',
    marginLeft: WP(2),
  },
});

export default SeatsPriceInfo;
