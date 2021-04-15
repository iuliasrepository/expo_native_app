import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

function Navbar () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>List Creator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 15,
        backgroundColor: '#1b716e',
        width: '100%'

    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
})

export  default  Navbar
