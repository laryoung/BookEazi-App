import React,{ useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import { Button } from 'react-native-elements';
import Loader from '../components/Loader';

const ActivityIndicatorScreen = () => {
    const [ loading, setLoading ] = useState(true);

    return (
        <View style={styles.container}>
            <Loader
                loading={loading}
            />
        </View>
    )

}
const styles= StyleSheet.create({
    container:{
        backgroundColor: '#CCCCCC',
        height: Dimensions.get('window').height,
        padding: 15,
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        paddingTop: 50
    }
});

export default ActivityIndicatorScreen;