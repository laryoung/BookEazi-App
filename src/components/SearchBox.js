import React, { memo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {useIsFocused, DefaultTheme} from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from './Spacer';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBox = ({ onChangeSearchText, openDrawer, placeholder,value }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={openDrawer}>
            <FontAwesome5 name="bars" style={{padding:5}} size={20} color='white' />
            </TouchableOpacity>
           
         
                <SearchBar placeholder={placeholder}  
                    
                    containerStyle={styles.searchBoxContainer}
                    inputContainerStyle={{height:15,backgroundColor:"white"}}
                    inputStyle={{height:15
                    }}
                    showCancel
                    onChangeText={onChangeSearchText}  
                    value={value}
                   

                />
          
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    
    searchBoxContainer:{
        backgroundColor:'transparent',
        marginBottom:15
        
    }
    
   
})
export default memo(SearchBox)