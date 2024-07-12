;
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Svgs from '../../assets/graphics/svgs'


const HeaderComponent = ({
  title,
  desc,
  titlePosition = 'left',
  titleStyle,
  containerStyle,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onLeftIconPress,
  onRightIconPress,
  type,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {LeftIcon && (
        <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIconContainer}>
          <LeftIcon />
        </TouchableOpacity>
      )}
      <View style={[styles.titleContainer, titlePosition === 'center' && styles.titleCenter]}>
        <Text style={[styles.title,titleStyle]}>{title}</Text>
        <Text style={[styles.desc,titleStyle]}>{desc}</Text>
      </View>
      {RightIcon && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.rightIconContainer}>
          <RightIcon />
          {
            type === 'notification' &&
            <View style={styles.dotContainer}>
                <Svgs.dot />
            </View>
          }
        </TouchableOpacity>
      )}
    </View>
  );
};



export default HeaderComponent;
