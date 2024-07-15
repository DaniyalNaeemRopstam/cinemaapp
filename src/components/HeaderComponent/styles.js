import { Platform, StyleSheet } from "react-native";
import { WP, HP, mvs } from '../../assets/config/space';
import colors from '../../assets/config/colors';
import Fonts from '../../assets/config/fontFamily';
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      paddingHorizontal: WP(4),
      paddingTop:WP(2),
      paddingBottom:WP(2),
      backgroundColor:colors.transparent,
      position:'relative',
      
    },
    leftIconContainer: {
      padding:WP(2),
      paddingVertical:HP(1.5),
      marginRight:WP(2),
      position:'absolute',
      left:WP(4),
      top:WP(1),
      zIndex:1,
      // backgroundColor:'red'
    },
    rightIconContainer: {
        position:'absolute',
        // padding:WP(2),
        top:Platform.OS === 'android' ? WP(1) : WP(0)  ,
        right:WP(3),
        zIndex:1,
    },
    dotContainer:{
        position:'absolute',
        left:WP(2),
        bottom:WP(3),
        padding:WP(2),
        zIndex:1
    },
    titleContainer: {
      flex: 1,
    },
    titleCenter: {
      alignItems: 'center',
    },
    title: {
      fontSize: mvs(18),
      fontFamily: Fonts.LatoBold,
      color: colors.black,
    },
    desc:{
      fontSize: mvs(13),
      fontFamily: Fonts.LatoBold,
      color: colors.primary,
    }
  });
export default styles