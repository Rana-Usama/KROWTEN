import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function RegisterScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Email Address",
            borderRightColor: Colors.lightGrey,
            borderTopColor: Colors.lightGrey,
            borderLeftColor: Colors.primary,
            borderBottomColor: Colors.lightGrey,
            leftImage: require('../../assets/images/mail.png'),
            value: "",
        },
        {
            placeholder: "Password",
            borderRightColor: Colors.lightGrey,
            borderTopColor: Colors.lightGrey,
            borderLeftColor: Colors.primary,
            borderBottomColor: Colors.lightGrey,
            leftImage: require('../../assets/images/lock.png'),
            secure: true,
            value: ""
        },

    ]);


    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };


    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.lightWhite }}>
            {/* Top Image */}
            <Image style={{ width: RFPercentage(40), height: RFPercentage(40), marginTop: RFPercentage(2) }} source={require('../../assets/images/top.png')} />

            {/* Buttons */}
            <View style={{ width: '100%', height: RFPercentage(8.2), backgroundColor: Colors.lightGrey, flexDirection: 'row' }} >
                <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('1')} style={{ position: 'absolute', left: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: activeButton == '1' ? Colors.secondary : Colors.lightGrey, width: '50%', height: '100%' }} >
                    {activeButton == '1' ?
                        <View style={{ width: '100%', height: RFPercentage(0.6), position: 'absolute', top: 0, backgroundColor: Colors.primary }} />
                        :
                        null
                    }
                    <Text style={{ color: activeButton == '1' ? Colors.primary : Colors.darkGrey, fontSize: RFPercentage(2.1), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: activeButton == '2' ? Colors.secondary : Colors.lightGrey, width: '50%', height: '100%' }} >
                    {activeButton == '2' ?
                        <View style={{ width: '100%', height: RFPercentage(0.6), position: 'absolute', top: 0, backgroundColor: Colors.primary }} />
                        :
                        null
                    }
                    <Text style={{ color: activeButton == '2' ? Colors.primary : Colors.darkGrey, fontSize: RFPercentage(2.1), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                        REGISTER
                    </Text>
                </TouchableOpacity>
            </View>

            {activeButton == '1' ?
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                    {/* Heading */}
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', marginTop: RFPercentage(3) }} >
                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '700' : 'bold', color: Colors.black }} >
                            Welcome Back!
                        </Text>
                    </View>

                    {/* Input fields */}
                    <View style={{ marginTop: RFPercentage(3), justifyContent: 'center', alignItems: 'center', width: '80%' }}>

                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i === 0 ? RFPercentage(-2) : RFPercentage(0.6) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    backgroundColor={Colors.lightGrey}
                                    leftImageSource={item.leftImage}
                                    borderWidth={RFPercentage(0.5)}
                                    borderColor={Colors.lightGrey}
                                    borderBottomColor={item.borderBottomColor}
                                    borderRightColor={item.borderRightColor}
                                    borderTopColor={item.borderTopColor}
                                    borderLeftColor={item.borderLeftColor}
                                    height={RFPercentage(8.3)}
                                    secure={item.secure}
                                    borderRadius={RFPercentage(1)}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"100%"}
                                />
                            </View>
                        ))}
                    </View>
                </View>
                :
                null
            }
        </Screen>
    );
}

export default RegisterScreen