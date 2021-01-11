import React from 'react';
import { StyleSheet, View } from 'react-native';
import {  Paragraph,Caption, Drawer, TouchableRipple } from 'react-native-paper';
import { Text } from 'react-native-elements';
import {
    DrawerItem,
  } from '@react-navigation/drawer';
import DrawerSpacer from '../components/DrawerSpacer';
import { FontAwesome5,
         AntDesign,
         MaterialIcons,
         Fontisto,
         Ionicons,
         Feather
       } from '@expo/vector-icons';

const DrawerWallets = ({onPress}) => {
    return (
        <View style={{backgroundColor:"#fff"}}>
            <Drawer.Section title="Wallets">
                    
                    <DrawerItem 
                        icon={({ color, size})=>(
                            <FontAwesome5 name="money-check" color={color} size={size}/>
                        )}
                        label="Larry App Wallet"
                    />
                      
                   
                    <DrawerItem 
                        icon={({ color, size })=>(
                          <AntDesign name="wallet" color={color} size={size} />
                        )}
                        label="All Wallets"
                    />
            </Drawer.Section>
            <Drawer.Section>
                <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialIcons name="favorite-border" color={color} size={size} />
                        )}
                        label="Voucher"
                      
                />
                <Caption style={styles.caption}>Pay Once, Stay Twice</Caption>    
            </Drawer.Section>
           
            <Drawer.Section>
                
                    <DrawerItem 
                        icon={({ color,size }) => (
                            <AntDesign 
                                name="adduser"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Invite & Earn"
                        onPress={onPress}
                    />
                    <Caption style={styles.caption}>Refer your friend and earn</Caption>              
            </Drawer.Section>
            <Drawer.Section>
                <DrawerItem 
                    label="MOTEL Ping"
                    icon={({ color, size}) => (
                        <Fontisto
                            name="hipchat"
                            color={color}
                            size={size}
                        />
                    )}
                />
                
                <DrawerItem 
                    label="Need Help ?"
                    icon={({ color, size}) => (
                        <Fontisto
                            name="hipchat"
                            color={color}
                            size={size}
                        />
                    )}
                />
                

            </Drawer.Section>

            <Drawer.Section>
                <DrawerItem 
                    label="MOTEL Ping"
                    icon={({ color, size}) => (
                        <Ionicons
                            name="logo-whatsapp"
                            color={color}
                            size={size}
                        />
                    )}
                />
                
                <DrawerItem 
                    label="Need Help ?"
                    icon={({ color, size}) => (
                        <Feather
                            name="lock"
                            color={color}
                            size={size}
                        />
                    )}
                />
                
                <Caption>Version 1.0</Caption>
            </Drawer.Section>
            
          
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        alignItems:'center'
    },
    caption:{
        marginLeft:75,
        position:'absolute',
        bottom:4,
        fontSize:11,
        
    }
})
export default DrawerWallets;