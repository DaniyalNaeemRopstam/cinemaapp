import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HP, WP, mvs } from '../../assets/config/space';
import colors from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';

export const CustomButton = ({ title = '', style, txtStyle = {}, onPress, Icon, disable = false, loader = false, loaderColor = colors.black }) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: HP(2),
      backgroundColor: disable ? colors.gray : colors.primary,
      borderRadius: WP(3),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    titleStyle: {
      color: colors.white,
      fontSize: mvs(18),
      lineHeight: mvs(18),
      fontFamily: fontFamily.LatoBold,
      textAlign: 'center',
      ...txtStyle,
    }
  });
  return (
    <TouchableOpacity disabled={disable} onPress={onPress} style={[styles.container, style]}
    >
      {Icon && Icon}
      {loader ?
        <ActivityIndicator color={loaderColor} col={'small'} />
        :
        <Text style={styles.titleStyle}>{title}</Text>
      }
    </TouchableOpacity>
  );
};
