import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function SearchRecommendationScreen(props) {
    return (
        <Screen style={styles.screen}>


        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.lightWhite
    },
})

export default SearchRecommendationScreen;