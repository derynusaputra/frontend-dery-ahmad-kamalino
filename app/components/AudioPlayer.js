import React from 'react'
import { View, Text, TouchableOpacity, Alert, ActivityIndicator, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { COLORS, ICONS, IMAGES, SIZES } from '../constants/theme';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { GlobalStyleSheet } from '../constants/styleSheet';

var Sound = require('react-native-sound');

export default class AudioPlayer extends React.Component {


    constructor() {
        super();
        this.state = {
            playState: 'paused', /*playing, paused*/
            playSeconds: 0,
            duration: 0,
            loading: true,
        }
        this.sliderEditing = false;
    }


    componentDidMount() {
        this.getAudioDuration();
        this.getAudioTimeString();
        this.timeout = setInterval(() => {
            if (this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing) {
                this.sound.getCurrentTime((seconds, isPlaying) => {
                    this.setState({ playSeconds: seconds });
                })
            }
        }, 100);
    }
    componentWillUnmount() {

        if (this.sound) {
            this.sound.release();
            this.sound = null;
        }
        if (this.timeout) {
            clearInterval(this.timeout);
        }
    }

    onSliderEditStart = () => {
        this.sliderEditing = true;
    }
    onSliderEditEnd = () => {
        this.sliderEditing = false;
    }
    onSliderEditing = (value) => {

        const el = { ...value };

        if (this.sound) {
            this.sound.setCurrentTime(el[0]);
            this.setState({ playSeconds: el[0] });
        }
    }
    play = async () => {
        const filepath = this.props.audio;
        if (this.sound) {
            this.sound.play(this.playComplete);
            this.setState({ playState: 'playing' });
        } else {

            console.log('[Play]', filepath);
            this.sound = new Sound(filepath, null, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    Alert.alert('Notice', 'audio file error. (Error code : 1)');
                    this.setState({ playState: 'paused' });
                } else {
                    this.setState({ playState: 'playing', duration: this.sound.getDuration() });
                    this.sound.play(this.playComplete);
                }
            });
        }
    }

    getAudioDuration = () => {
        const filepath = this.props.audio;
        this.sound = new Sound(filepath,  (error) => {
            if (error) {
                Alert.alert('failed to load the sound', error);
                throw new Error(error);
            } else {
                this.setState({ duration: this.sound && this.sound.getDuration(), loading: false });
                //Alert.alert('get time');
                //throw new Error('error');
            }
        });
    }

    playComplete = (success) => {
        if (this.sound) {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
                //Alert.alert('Notice', 'audio file error. (Error code : 2)');
            }
            this.setState({ playState: 'paused', playSeconds: 0 });
            this.sound.setCurrentTime(0);
        }
    }
    pause = () => {
        if (this.sound) {
            this.sound.pause();
        }

        this.setState({ playState: 'paused' });
    }
    jumpSeconds = (secsDelta) => {
        if (this.sound) {
            this.sound.getCurrentTime((secs, isPlaying) => {
                let nextSecs = secs + secsDelta;
                if (nextSecs < 0) nextSecs = 0;
                else if (nextSecs > this.state.duration) nextSecs = this.state.duration;
                this.sound.setCurrentTime(nextSecs);
                this.setState({ playSeconds: nextSecs });
            })
        }
    }
    getAudioTimeString(seconds) {

        const h = parseInt(seconds / (60 * 60));
        const m = parseInt(seconds % (60 * 60) / 60);
        const s = parseInt(seconds % 60);
        return ((h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s));

    }

    render() {

        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
        const durationString = this.getAudioTimeString(this.state.duration);


        return (
            <View style={{ justifyContent: 'center', flexDirection: 'row', height: 56, alignItems: 'center', paddingHorizontal: 10,paddingTop:10 }}>
                {this.state.loading ?
                    <>
                        <View
                            accessible={true}
                            accessibilityLabel="Loading"
                            accessibilityHint="Loading audio"
                            style={{
                                height: 50,
                                width: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <ActivityIndicator color="#000" />
                        </View>
                    </>
                    :
                    <>
                        {this.state.playState == 'playing' &&
                            <TouchableOpacity onPress={this.pause}
                                accessible={true}
                                accessibilityLabel="Pause"
                                accessibilityHint="Pause audio"
                                style={{
                                    height: 50,
                                    width: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {/* <SvgXml
                                    style={{
                                        width: 20,
                                        height: 18,
                                    }}
                                    xml={ICONS.pause}
                                /> */}
                                <Image
                                    style={[GlobalStyleSheet.image2, { tintColor: this.props.theme.colors.title }]}
                                    source={IMAGES.pause}
                                />
                            </TouchableOpacity>}
                        {this.state.playState == 'paused' &&
                            <TouchableOpacity onPress={this.play}
                                accessible={true}
                                accessibilityLabel="Play"
                                accessibilityHint="Play audio"
                                style={{
                                    height: 50,
                                    width: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {/* <SvgXml
                                    style={{
                                        width: 20,
                                        height: 18,
                                    }}
                                    xml={ICONS.play}
                                /> */}
                                <Image
                                    style={[GlobalStyleSheet.image2, { tintColor: this.props.theme.colors.title }]}
                                    source={IMAGES.play}
                                />
                            </TouchableOpacity>}
                    </>
                }
                <Text style={{ color:this.props.theme.colors.title, alignSelf: 'center' }}>{currentTimeString}</Text>
                <View
                    style={{ flex: 1, paddingHorizontal: 22 }}
                    accessible={true}
                    accessibilityLabel="Control bar"
                    accessibilityHint="Control audio"
                >
                    <MultiSlider
                        trackStyle={{ height: 4, borderRadius: 2, backgroundColor: this.props.theme.colors.border }}
                        selectedStyle={{
                            backgroundColor: this.props.theme.colors.title,
                        }}
                        values={[this.state.playSeconds]}
                        min={0}
                        max={this.state.duration > 0 ? this.state.duration : 100}
                        onValuesChange={this.onSliderEditing}
                        markerStyle={{
                            backgroundColor: this.props.theme.colors.title,
                            top: 1.5,
                            height: 15,
                            width: 15,
                        }}
                        sliderLength={SIZES.width - 260}
                    />
                    {/* <CustomSlider
                        value={this.state.playSeconds} 
                        maximumValue={this.state.duration} 
                        onValueChange={this.onSliderEditing}
                    /> */}
                    {/* <Slider
                        onSlidingStart={this.onSliderEditStart}
                        onSlidingComplete={this.onSliderEditEnd}
                        onValueChange={this.onSliderEditing}
                        value={this.state.playSeconds} 
                        maximumValue={this.state.duration} 
                        maximumTrackTintColor='rgba(255,255,255,.5)' minimumTrackTintColor='white' thumbTintColor='white' 
                        style={{flex:1,height:3, width:'100%', alignSelf:'center', marginHorizontal:Platform.select({ios:5})}}/> */}
                </View>
                <Text style={{ color: this.props.theme.colors.title, alignSelf: 'center', paddingRight: 10 }}>{durationString}</Text>
            </View>
        )
    }
}