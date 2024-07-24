import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GlobalStyleSheet } from '../../constants/styleSheet';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ChatData = [
  {
    id: '1',
    title: 'Alex Techie',
    image: IMAGES.storypic1,
    text: "uff ye mst story 🥰",
    hasStory: false,
    time:'just now',
    active:true,
  },
  {
    id: '2',
    title: 'Lily Learns',
    image: IMAGES.storypic2,
    text: "Good Morning ❤️",
    hasStory: true,
    time: '20min',
    chatcount:'2',
    active: false,
  },
  {
    id: '3',
    title: 'Mia Maven',
    image: IMAGES.storypic3,
    text: "Good Night 🤞",
    hasStory: false,
    time: '5min',
    chatcount:'3',
    active:true,
  },
  {
    id: '4',
    title: 'Sophia James',
    image: IMAGES.storypic4,
    text: "Hello 👋",
    hasStory: true,
    time: '10min',
    active: false,
  },
  {
    id: '5',
    title: 'Deepesh gaur',
    image: IMAGES.storypic1,
    text: "Welcome bro ❤️",
    hasStory: false,
    time: '1d',
    active: false,
  },
  {
    id: '6',
    title: 'Alex Techie',
    image: IMAGES.storypic4,
    text: "hmm ",
    hasStory: false,
    time: '5d',
    active:true,
  },
  {
    id: '7',
    title: 'Lily Learns',
    image: IMAGES.storypic2,
    text: "yes bro",
    hasStory: false,
    time: '10d',
    active: false,
  },
  {
    id: '8',
    title: 'Mia Maven',
    image: IMAGES.storypic3,
    text: "Have a nice day 🥰",
    hasStory: false,
    time: '15d',
    active:true,
  },
  {
    id: '9',
    title: 'Sophia James',
    image: IMAGES.storypic4,
    text: "I call you later 🤙",
    hasStory: false,
    time: '16d',
    active: false,
  },
  {
    id: '10',
    title: 'Deepesh gaur',
    image: IMAGES.storypic1,
    text: "I am busy ",
    hasStory: false,
    time: '20d',
    active:true,
  },
  {
    id: '11',
    title: 'Alex Techie',
    image: IMAGES.storypic2,
    text: "Good morning dear 🐻",
    hasStory: true,
    time: '25d',
    active:false,
  },
];

const LiveUserData = [
  {
    id: '1',
    title: 'deepesh',
    image: IMAGES.profile2,
    active: false,
  },
  {
    id: '2',
    title: 'Alex Techie',
    image: IMAGES.storypic2,
    active: true,
    
  },
  {
    id: '3',
    title: 'Lily Learns',
    image: IMAGES.storypic3,
    active: false,
  },
  {
    id: '4',
    title: 'Mia Maven',
    image: IMAGES.storypic4,
    active: true,
    
  },
  {
    id: '5',
    title: 'Sophia Techie',
    image: IMAGES.storypic1,
    active: false,
  },
  {
    id: '6',
    title: 'Sophia James',
    image: IMAGES.profilepic7,
    active: false,
  },
  {
    id: '7',
    title: 'herry Techie',
    image: IMAGES.profilepic8,
    active: true,
  },
]


const Item = ({ title, image, text, hasStory, time, chatcount, active, navigation, theme }) => (
 

  <TouchableOpacity
    onPress={() => navigation.navigate('SingleChat')}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 10,
      paddingLeft: 10,
      marginBottom: 8,
      borderWidth: 1,
      borderRadius: 15,
      marginHorizontal: 15,
      borderColor: theme.colors.border,
      backgroundColor: theme.dark ? 'rgba(255,255,255,0.03)' : '#F4F8FD',
    }}
  >
      <View>
        <TouchableOpacity
          onPress={() => {
            hasStory == false ?
              navigation.navigate('status', {
                name: title,
                image: image,
                statusData: [IMAGES.profilepic11, IMAGES.profilepic12]
              })
              :
              navigation.navigate('AnotherProfile')
          }}
          style={{ marginRight: 10 }}
        >
         {
          hasStory == false ?
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 50 }}
                source={image}
              />
              <Image
                style={{ width: 48, height: 48, position: 'absolute', bottom: -4, right: -4 }}
                source={IMAGES.cricle}
              />
            </View>
            :
            <View>
              <Image
                style={{ width: 42, height: 42, borderRadius: 50 }}
                source={image}
              />
            </View>
        }
        
          {active == false ?
            <View style={{ backgroundColor: COLORS.success, width: 12, height: 12, borderRadius: 50, position: 'absolute', bottom: -1, right: -1, borderWidth: 2, borderColor:theme.dark ? theme.colors.card : '#F4F8FD' }}></View>
            :
            null
          }
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text style={{ ...FONTS.font, ...FONTS.fontMedium, color: theme.colors.title,flex:1 }}>{title}</Text>
        <Text style={{ ...FONTS.fontSm, ...FONTS.fontRegular, color: theme.colors.title,opacity:.4}}>{time}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Text style={{ ...FONTS.fontXs, color: theme.colors.text, flex: 1 }}>{text}</Text>
          {chatcount &&
          <View style={{borderRadius: 50,backgroundColor: theme.colors.primary, }}>
            <Text style={{ ...FONTS.font, color: '#fff', width: 20, height: 20, alignItems: 'center', textAlign: 'center', }}>{chatcount}</Text>
          </View> 
          }
          </View>
      </View>
  </TouchableOpacity>
)

const ActiveChat = () => {
  const navigation = useNavigation();

  const theme = useTheme();
  const { colors } = theme;

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15,gap:10}}
      >
        {LiveUserData.map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('SingleChat')}
              key={index}
              style={{ alignItems: 'center', marginBottom: 10, width: 65 }}
            >
              <Image
                style={{width: 55, height: 55,borderRadius:50}}
                source={ data.image }
              />
              <Text numberOfLines={1} style={{ ...FONTS.fontMedium, color: colors.title, fontSize: 10, marginTop: 5 }}>{data.title}</Text>
              <View style={{ backgroundColor: COLORS.success, width: 12, height: 12, borderRadius: 50, position: 'absolute', bottom: 20, right: 8, borderWidth: 2, borderColor:colors.card }}></View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <Text style={{ ...FONTS.fontMedium, fontSize: 16, color: colors.title,paddingHorizontal:15,marginBottom:10}}>Messages</Text>
    </View>
  )
}

const Chat = ({ navigation }) => {

  const theme = useTheme();
  const { colors } = theme;

  return (
    <SafeAreaView style={{ backgroundColor: colors.card, flex: 1 }}>
      <View style={GlobalStyleSheet.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:colors.border,marginHorizontal:-15,paddingHorizontal:15 }}>
          <Text style={{ ...FONTS.fontSemiBold, fontSize: 18, color: colors.title, flex: 1 }}>Chat</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewChat')}
          >
            <Image
              style={{width:20,height:20,resizeMode:'contain',tintColor:colors.title}}
              source={IMAGES.write}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical:20,marginBottom:10 }}>
          <TouchableOpacity
            style={{
              zIndex: 1,
              position: 'absolute',
              top: 13,
              left: 15
            }}
          >
            <Image
              style={{
                tintColor: Colors.text,
                width: 20,
                height: 20,
                resizeMode: 'contain'
              }}
              source={IMAGES.search}
            />
          </TouchableOpacity>
          <TextInput
            placeholder='Search chat here...'
            placeholderTextColor={colors.placeholder}
            style={[
              GlobalStyleSheet.inputBox, {
                backgroundColor: colors.input,
              },
            ]}
          />
        </View>
      </View>
      <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ChatData}
          renderItem={({ item }) =>
            <Item
              title={item.title}
              image={item.image}
              text={item.text}
              hasStory={item.hasStory}
              isChecked={item.isChecked}
              time={item.time}
              chatcount={item.chatcount}
              active={item.active}
              navigation={navigation}
              theme={theme}
            />
          }
          ListHeaderComponent={() => <ActiveChat/>}
          keyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Chat;