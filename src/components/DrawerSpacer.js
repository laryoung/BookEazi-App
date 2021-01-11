import React from 'react'
import { View, StyleSheet } from 'react-native';

function DrawerSpacer({children}){
    return(
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:20,
        marginTop:20,
        marginBottom:5

    }
})

export default DrawerSpacer;