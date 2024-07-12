;
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { WP, HP, mvs } from '../../assets/config/space';
import fontFamily from '../../assets/config/fontFamily';
import colors from '../../assets/config/colors';

const TabComponent = ({ title, icon:IconComponent, isSelected, onPress, overlayImage , onLayout }) => {
  return (
    <TouchableOpacity style={[styles.tabContainer, isSelected && styles.selectedTab]} onPress={onPress} onLayout={onLayout}>
      <Text style={[styles.title, isSelected && styles.selectedTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: WP(2),
    marginLeft: WP(2),
    borderRadius: WP(2.5),
    backgroundColor: colors.tabsColor,
    overflow: 'hidden',
    paddingHorizontal:WP(4),
    paddingVertical:WP(2.5),
    position:'relative',
    marginVertical:HP(1),
    shadowColor:colors.black, 
    shadowOffset: {
        width: 0, 
        height: 2, 
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84, 
    elevation: 5,
  },
  selectedTab: {
    backgroundColor: colors.primary,
    shadowColor:colors.primary, 
    shadowOffset: {
        width: 0, 
        height: 2, 
    },
    shadowOpacity: 1,
    shadowRadius: 10, 
    elevation: 5,
  },
  overlayImage: {
    position:'absolute',
    resizeMode:'contain'
  },
  iconContainer: {
    marginRight:WP(2)
  },
  title: {
    fontSize: mvs(14),
    color: colors.black,
    fontFamily: fontFamily.LatoRegular,
    fontWeight:'600'
  },
  selectedTitle: {
    color: colors.white,
    fontFamily: fontFamily.LatoBold,
  },
});

export default TabComponent;
