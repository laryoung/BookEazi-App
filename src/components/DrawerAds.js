import React from 'react';
import { View, StyleSheet } from 'react-native';
import {  Avatar, Paragraph, Caption, Drawer } from 'react-native-paper';
import { Text } from 'react-native-elements';

const DrawerAds = () => {
    return (
        <View style={styles.row}>
            <Avatar.Image
                source={{
     uri:'https://previews.123rf.com/images/houbacze/houbacze1701/houbacze170100363/71044716-red-easy-vector-illustration-isolated-paper-bubble-banner-promo-this-element-is-well-adapted-for-web.jpg'
                }}
                size={60}
            />
            <Drawer.Section>
             <Paragraph>Become an MOTEL Wizard </Paragraph>
             <Caption>Click here to start</Caption>
             </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        
    }
})
export default DrawerAds;