import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import colors from '../assets/config/colors'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import svgs from '../assets/graphics/svgs'
import getWeekDates from '../utils/getWeekDays'
import { CustomButton } from '../components/uiComps/CustomButton'
import { WP, mvs } from '../assets/config/space'
import SliderDateComponent from '../components/SliderDateComponent/SliderDateComponent'
import SeatSelectionListingComponent from '../components/SeatSelectionListingComponent/SeatSelectionListingComponent'
import { useNavigation } from '@react-navigation/native';

const CinemaHallListingScreen = () => {
  const dates = getWeekDates()
  const [selectedDateTabs, setSelectedDateTabs] = useState(0);
  const [selectedHall, setSelectedHall] = useState(null);

  useEffect(() => {
    setSelectedHall(null)
  }, [selectedDateTabs])

  const navigation = useNavigation();
  const handleNavigation = ()=>{
    if(selectedHall === null){
      Alert.alert("Info","Please select hall first");
      return 
    }
    
    navigation.navigate('Media Library');
  }

  return (
    <MainLayout statusbarBackgrund={colors.white}  >
      <HeaderComponent
        title="The King’s Man"
        desc="In theaters december 22, 2021"
        titlePosition="center"
        leftIcon={svgs.arrowBack}
        onLeftIconPress={() => { }}
        containerStyle={styles.header}
      />

    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.datesTitle}>Date</Text>

        <SliderDateComponent
          tabs={dates}
          selectedTab={selectedDateTabs}
          onTabPress={setSelectedDateTabs}

        />

        <SeatSelectionListingComponent
          selectedDateIndex={selectedDateTabs}
          selectedHall={selectedHall}
          setSelectedHall={setSelectedHall}
        />



      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Select Seats"
          onPress={handleNavigation}
        />
      </View>
      </ScrollView>
    </MainLayout>
  )
}

export default CinemaHallListingScreen

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  datesTitle: {
    fontSize: mvs(16),
    paddingHorizontal: WP(4),
    fontWeight: '500',
    marginTop:50
  },
  buttonContainer: {
    paddingHorizontal: WP(4)
  }
})