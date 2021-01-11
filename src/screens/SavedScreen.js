import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

function SavedScreen () {
    return (
        <>
            <SafeAreaView>
              <Text h4>Hello</Text>
            </SafeAreaView>
        </>
    )
}

export default memo(SavedScreen);