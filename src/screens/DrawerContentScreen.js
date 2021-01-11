import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  DrawerContentScrollView,
        } from '@react-navigation/drawer';
import {
        useTheme,
        Avatar,
        Title,
        Caption,
        Paragraph,
        Drawer,
        Text,
        TouchableRipple,
        Switch
       } from 'react-native-paper';

import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import DrawerSpacer from '../components/DrawerSpacer';
import DrawerAds from '../components/DrawerAds';
import DrawerWallets from  '../components/DrawerWallets';


function DrawerContentScreen ({props}) {
    //const { navigation } = props;
     return (
    
       <DrawerContentScrollView
        {...props }
        showsVerticalScrollIndicator={false}
       >
           <SafeAreaView>
           <View style={styles.drawerHeader}>
                <Text h4>Larry Pleasure</Text>
            </View>
            <View style={styles.userInfo}>
                <DrawerSpacer>
                    <Avatar.Image
                        source={{
                            uri:'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                        }}
                    />
                
                    <Title>
                        King Jnr
                    </Title>
                </DrawerSpacer>
  
            </View>
            <DrawerSpacer>
                <DrawerAds/>
            </DrawerSpacer>
          
            <DrawerWallets onPress={()=>props.navigation.navigate('Saved')} />   
            </SafeAreaView>
        </DrawerContentScrollView>
     
    )
}

const styles =StyleSheet.create({
    drawerHeader:{
        backgroundColor:'#e91e63',
        height:60,
        padding:0
    },
    userInfo:{
        textAlign:"center",
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    }

})
export default memo(DrawerContentScreen);