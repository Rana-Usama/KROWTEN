import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//config
import Colors from '../config/Colors';

//components
import Screen from './../components/Screen';

function HomeScreen(props) {

    const [color, setColor] = useState('0');

    const cartData = [
        {
            thumbnail: require('../../assets/images/cart1.png'),
            dpSource: require('../../assets/images/f7.png'),
            mainTitle: 'Annete Black',
            subTitle: 'Charleston West Virginia'
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
                        <View key={i} style={{ marginTop: RFPercentage(6), width: '92%', height: RFPercentage(50), borderRadius: RFPercentage(3), backgroundColor: '#F4F4F4', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >

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

                            {/* Liked Buttons */}
                            <View style={{ marginTop: RFPercentage(2.4), width: '85%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                                <TouchableOpacity onPress={() => setColor('1')} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', left: 0 }} >
                                    <FontAwesome name="heart" style={{ fontSize: RFPercentage(2.3) }} color={color == '1' ? Colors.pink : Colors.black} />
                                    <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2.2), color: color == '1' ? Colors.pink : Colors.black }} >
                                        Liked
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setColor('2')} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                                    <MaterialCommunityIcons name="comment" style={{ fontSize: RFPercentage(2.3) }} color={color == '2' ? Colors.pink : Colors.black} />
                                    <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2.2), color: color == '2' ? Colors.pink : Colors.black }} >
                                        Comment
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setColor('3')} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', right: 0 }} >
                                    <Ionicons name="share-social-outline" style={{ fontSize: RFPercentage(2.3) }} color={color == '3' ? Colors.pink : Colors.black} />
                                    <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2.2), color: color == '3' ? Colors.pink : Colors.black }} >
                                        Share
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                </View>
            </ScrollView>

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