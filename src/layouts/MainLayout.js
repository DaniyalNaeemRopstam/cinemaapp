import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import colors from '../assets/config/colors'
import { HP, WP } from '../assets/config/space'

const MainLayout = ({ 
  children, 
  paddingTop= StatusBar.currentHeight , 
  isScrollable = false, 
  loader=false, 
  statusbarBackgrund=colors.backgroundColor,
  bottomColor=colors.backgroundColor, 
}) => {
  return (
    <View style={styles.container}>

    
      <StatusBar translucent backgroundColor={statusbarBackgrund} barStyle={'dark-content'} />
      <SafeAreaView style={{flex: 0, backgroundColor: statusbarBackgrund, zIndex:1}} />
      <SafeAreaView style={[styles.innerContainer,{ paddingTop,backgroundColor:bottomColor,zIndex:1 }]}>
        {
          isScrollable ?
            <ScrollView 
              contentContainerStyle={styles.scroll} 
              keyboardShouldPersistTaps="handled"
              bounces={false}
              showsVerticalScrollIndicator={false}
              >
              {children}
            </ScrollView>
            :
            <View style={styles.view}>
              {children}
            </View>
        }
      </SafeAreaView>
    </View>
  )
}

export default MainLayout

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    width: '100%',
    position: 'relative',
    zIndex:1,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    zIndex:1,
  },
  view: {
    flex: 1,
    width: '100%',
    zIndex:1
  },
  scroll: {
    flexGrow: 1,
    width: '100%',
  }
})