import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native';


import SearchBox from '../components/SearchBox';
import SearchResult from '../components/SearchResults';
import { list } from '../data/fake';
import Spacer from '../components/Spacer';

function HomeScreen ({navigation}) {

   const [inputFocus, setInputFocus] = useState(false);
   const [searchQuery, setSearchQuery ] = useState('');
    
   const onChangeSearch = query => setSearchQuery(query);

    return (
       <>
            <View style={styles.headerStyle}>
                <Spacer>
                    <SearchBox 
                        placeholder="Type Name or Location..."
                        value={searchQuery}
                        onChangeSearchText={onChangeSearch} 
                        openDrawer={()=>navigation.openDrawer()}
                    />
               </Spacer>
            </View>
            <ScrollView style={styles.body} >
                <Text>Hi</Text>
               
            </ScrollView>
            
    </>
    )
}

const styles =StyleSheet.create({
    headerStyle:{
        backgroundColor:'#e91e63',
       
       
    },
   body:{
       flex:1
   }
});

export default memo(HomeScreen);