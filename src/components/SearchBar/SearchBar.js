import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any icon library you prefer

const SearchComponent = () => {
  return (
    <View>
      {/* First search bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 10 }}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          placeholder="Watch"
          style={{ flex: 1, marginLeft: 10 }}
        />
      </View>

      {/* Second search bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 10, marginTop: 10 }}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          placeholder="TV shows, movies and more"
          style={{ flex: 1, marginLeft: 10 }}
        />
        <Icon name="times-circle" size={20} color="#888" /> {/* 'X' icon */}
      </View>
    </View>
  );
};

export default SearchComponent;
