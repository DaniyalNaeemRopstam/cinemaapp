import  { useState,memo } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TabComponent from './TabComponent';
import { WP, HP } from '../../assets/config/space';
import colors from '../../assets/config/colors';

const SliderDateComponent = ({ tabs, selectedTab, onTabPress }) => {
  const [ref, setRef] = useState(null);
  const [dataSourceCords, setDataSourceCords] = useState(new Array(tabs));
  const scrollHandler = (index) => {
    if (dataSourceCords.length >= index) {
      ref.scrollTo({
        x: dataSourceCords[index - 1],
        y: 0,
        animated: true,
      });
    }
  };


  const onLayout = (event, item, index) => {
    const layout = event.nativeEvent.layout;
    dataSourceCords[index] = layout.x - WP(20);
    setDataSourceCords(dataSourceCords);
    if (selectedTab == item + 1) {
      scrollHandler(item + 1)
    }
  }


  return (
    <View style={styles.container}>
      <ScrollView
        ref={(ref) => { setRef(ref); }}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}>
        {tabs.map((tab, index) => (
          <TabComponent
            key={index}
            title={tab.title}
            icon={tab.icon}
            isSelected={selectedTab === tab.id}
            onPress={() => { onTabPress(tab.id); scrollHandler(tab.id) }}
            overlayImage={tab.overlayImage}
            onLayout={(event)=>onLayout(event,tab,index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    paddingBottom: HP(1),
  },
  contentContainerStyle:
  {
    paddingLeft:WP(2),
    paddingRight:WP(4),
  }
});

export default memo(SliderDateComponent);
