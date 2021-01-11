import React from 'react';
import { StyleSheet, 
         Keyboard, 
         TouchableWithoutFeedback,
           } from 'react-native';

import { Text, Input } from 'react-native-elements';

const HideKeyboard= ({children}) => (
    <TouchableWithoutFeedback
        onPress={()=>Keyboard.dismiss}
        accessible={false}
    >
        { children }
    </TouchableWithoutFeedback>
)

export default HideKeyboard;