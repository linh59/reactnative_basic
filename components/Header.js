import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/color'

const Header = props => {
    return(
        <View style={styles.header}> 
            <Text style={StyleSheet.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
})
export default Header;