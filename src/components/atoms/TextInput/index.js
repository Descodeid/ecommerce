import React from 'react'
import { StyleSheet, TextInput as TextInputRN, View, Text } from 'react-native'
import normalize from 'react-native-normalize'

const TextInput = ({placeholder, color='black', opacity=0.4}) => {
    return (
            <TextInputRN style={styles.input(color, opacity)}
            placeholder={placeholder}
            placeholderTextColor={'black'}
            />
    );
}

export default TextInput

const styles = StyleSheet.create({
    input: (color, opacity) => ( {
        borderBottomWidth: 1,
        borderRadius: 4,
        fontFamily: 'OpenSans-Medium',
        fontSize: 18,
        paddingLeft: normalize(23),
        paddingVertical: normalize(18), 
    })
})
