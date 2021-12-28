import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

//components
import ClickButtons from './../components/common/ClickButtons';
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import BottomTab from '../components/common/BottomTab';

function HomeScreen(props) {

    const cartData = [
        {
            thumbnail: require('../../assets/images/cart1.png'),
            dpSource: require('../../assets/images/f7.png'),
            mainTitle: 'Annete Black',
            subTitle: 'Charleston West Virginia',
            firstIcon: 'heart',
            firstTitle: ''
        },
        {
            thumbnail: require('../../assets/images/cart2.png'),
            dpSource: require('../../assets/images/f3.png'),
            mainTitle: 'Jacob Jons',
            subTitle: 'Eplinos, Texas'
        },
    ]

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={{ marginTop: RFPercentage(5), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%' }} >
                {/* Image */}
                <TouchableOpacity activeOpacity={0.8} >
                    <Image style={{ width: RFPercentage(9), height: RFPercentage(9) }} source={require('../../assets/images/f1.png')} />
                </TouchableOpacity>
                <View style={{ marginLeft: RFPercentage(1.5) }} >
                    <Text style={{ fontSize: RFPercentage(2.3), color: Colors.darkBlack }}>
                        Hello,
                    </Text>
                    <Text style={{ fontSize: RFPercentage(2.3), color: Colors.black, fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                        Robert C.
                    </Text>
                </View>

                {/* Button */}
                <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(17), height: RFPercentage(5), justifyContent: 'center', alignItems: 'center', position: 'absolute', right: RFPercentage(8.5), backgroundColor: Colors.primary, borderRadius: RFPercentage(3) }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2) }} >
                        + Add Post
                    </Text>
                </TouchableOpacity>

                {/* Comment Image */}
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                    <Image style={{ width: RFPercentage(7), height: RFPercentage(7) }} source={require('../../assets/images/comment.png')} />
                </TouchableOpacity>
            </View>

            {/* Scroll starts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* cart */}
                    {cartData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(6) : RFPercentage(3), width: '92%', height: RFPercentage(54), borderRadius: RFPercentage(3), backgroundColor: '#F4F4F4', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >

                            {/* Thumbnail */}
                            <TouchableOpacity activeOpacity={0.6} style={{ marginTop: RFPercentage(1.5) }} >
                                <ImageBackground style={{ overflow: 'hidden', borderRadius: RFPercentage(1.2), width: RFPercentage(50), height: RFPercentage(32) }} source={item.thumbnail} />
                            </TouchableOpacity>

                            {/* Details */}
                            <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '93%' }} >
                                {/* Image */}
                                <TouchableOpacity activeOpacity={0.8} >
                                    <Image style={{ width: RFPercentage(7), height: RFPercentage(7) }} source={item.dpSource} />
                                </TouchableOpacity>
                                {/* Titles */}
                                <View style={{ marginLeft: RFPercentage(1.5) }} >
                                    <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                                        {item.mainTitle}
                                    </Text>
                                    <Text style={{ marginTop: RFPercentage(0.4), fontSize: RFPercentage(1.8), color: Colors.darkBlack }}>
                                        {item.subTitle}
                                    </Text>
                                </View>
                                {/* Menue */}
                                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, top: RFPercentage(1) }} >
                                    <Entypo name="dots-three-horizontal" style={{ fontSize: RFPercentage(2.2) }} color={Colors.black} />
                                </TouchableOpacity>
                            </View>

                            {/* Like/comment Buttons */}
                            <ClickButtons />
                        </View>
                    ))}
                    <View style={{ marginBottom: RFPercentage(12) }} />
                </View>
            </ScrollView>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen >
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

export default HomeScreen;