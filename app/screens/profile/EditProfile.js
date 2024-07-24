import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import { IMAGES } from '../../constants/theme';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/styleSheet';
import Button from '../../components/button/Button';
import { useTheme } from '@react-navigation/native';


const EditProfile = () => {

    const theme = useTheme();
    const { colors } = theme;

    const [imageUrl, setImageUrl] = useState('');


    const handleImageSelect = () => {
        if(Platform.OS == 'android'){
            try {
                ImagePicker.openPicker({
                    width: 200,
                    height: 200,
                    cropping: true
                }).then(image => {
                    setImageUrl(image.path);
                });
            } catch (e) {
                console.log(e);
            }
            
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.card, flex: 1 }}>
            <Header
                title="Edit profile"
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <View>
                    <View style={{}}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 100 }}
                            source={imageUrl ? {uri : imageUrl}  : IMAGES.profile}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={handleImageSelect}
                        style={{ position: 'absolute', bottom: 0, right: 0 }}
                    >
                        <View style={{ backgroundColor: theme.dark ? '#112036' : '#fff', width: 36, height: 36, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: '#2979F8', width: 30, height: 30, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 18, height: 18, resizeMode: 'contain' }}
                                    source={IMAGES.write2}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[GlobalStyleSheet.container, { marginTop: 15 }]}>
                <Text style={[GlobalStyleSheet.inputlable, { color: colors.title, opacity: .6 }]}>Name</Text>
                <View
                    style={[
                        GlobalStyleSheet.inputBox, {
                            borderColor: colors.border,
                            borderWidth: 1,
                            paddingLeft: 20
                        },
                    ]}
                >
                    <TextInput
                        style={[GlobalStyleSheet.input, { color: colors.title }]}
                        defaultValue='Alex Techie'
                    />
                </View>
                <Text style={[GlobalStyleSheet.inputlable, { color: colors.title, opacity: .6 }]}>Username</Text>
                <View
                    style={[
                        GlobalStyleSheet.inputBox, {
                            borderColor: colors.border,
                            borderWidth: 1,
                            paddingLeft: 20
                        },
                    ]}
                >
                    <TextInput
                        style={[GlobalStyleSheet.input, { color: colors.title }]}
                        defaultValue='alex_techie_2123'
                    />
                </View>

                <Text style={[GlobalStyleSheet.inputlable, { color: colors.title, opacity: .6 }]}>Bio</Text>
                <View
                    style={[
                        GlobalStyleSheet.inputBox, {
                            borderColor: colors.border,
                            borderWidth: 1,
                            paddingLeft: 20,
                            height: 'auto'
                        },
                    ]}
                >
                    <TextInput
                        multiline
                        numberOfLines={5}
                        style={[GlobalStyleSheet.input, { color: colors.title, height: 'auto', paddingTop: 10, paddingRight: 10, textAlignVertical: 'top',paddingBottom:10 }]}
                        defaultValue={`Music Lover 🎵\nWish me 09 September 🍰\nFashion, LifeStyle, Video Creator`}
                    />
                </View>

                <Button
                    title="Save"

                />
            </View>
        </SafeAreaView>
    )
}

export default EditProfile;