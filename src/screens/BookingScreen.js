import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

function BookingScreen () {
    return (
        <SafeAreaView>
            <Text>Hello</Text>
        </SafeAreaView>
    )
}

export default memo(BookingScreen);