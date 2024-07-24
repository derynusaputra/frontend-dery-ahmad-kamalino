import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, IMAGES, SIZES } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/styleSheet';
import Button from '../../components/button/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Otp = ({ navigation }) => {

    const theme = useTheme();
    const { colors } = theme;

    const [show, setshow] = React.useState(true);

    const [inputFocus, setFocus] = React.useState({
        onFocus1: false,
        onFocus2: false
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ backgroundColor: COLORS.secondary, flex: 1 }}>
                    <View style={{ alignItems: 'center' }}>
                        <LinearGradient colors={['rgba(255, 255, 255, 0.00)', 'rgba(255, 255, 255, 0.08)']} style={GlobalStyleSheet.cricleGradient1}>
                        </LinearGradient>
                        <LinearGradient colors={['rgba(255, 255, 255, 0.00)', 'rgba(255, 255, 255, 0.08)']} style={GlobalStyleSheet.cricleGradient2}>
                        </LinearGradient>
                        <View
                            style={{
                                paddingTop: 40,
                                paddingBottom: 20
                            }}
                        >
                            <Image
                                style={{ width: 80, height: 80 }}
                                source={IMAGES.logo}
                            />
                        </View>
                        <Text style={GlobalStyleSheet.formtitle}>Enter Code</Text>
                        <Text style={GlobalStyleSheet.forndescription}>Please enter your credentials to access your account and detail</Text>
                    </View>
                    <View style={[GlobalStyleSheet.loginarea, { backgroundColor: colors.card }]}>
                        
                        <View style={{alignItems:'center',marginBottom:20}}>
                            <OTPInputView
                                style={{ width: '80%', height: 50, }}
                                pinCount={4}
                                autoFocusOnLoad
                                codeInputFieldStyle={{
                                    ...FONTS.h6,
                                    backgroundColor: colors.input,
                                    color: colors.title,
                                    borderRadius: SIZES.radius,
                                    borderColor:colors.border
                                    
                                }}
                                codeInputHighlightStyle={{borderColor:COLORS.primary}}
                                onCodeFilled={(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View> 

                        <View style={{ marginTop: 10 }}>
                            <Button title="Next"
                                onPress={() => navigation.navigate('ChangePassword')}
                            />
                        </View>

                        <View style={{ flex: 1 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                            <Text style={{ ...FONTS.font, color: colors.text }}>Already have an account
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={{ ...FONTS.font, color: COLORS.primary, textDecorationLine: 'underline', textDecorationColor: '#2979F8', marginLeft: 5 }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Otp;