import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, IMAGES } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/styleSheet";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import ChatoptionSheet from "../../components/bottomsheet/ChatoptionSheet";

const ChatData = [
  {
    id: "1",
    title: "His, yatin👋!",
    send: false,
  },
  {
    id: "2",
    title:
      "Cna you send presentation file form Mr. Alex i lost it and cant find that 😢.",
    time: "4.40pm",
    send: false,
  },
  {
    id: "3",
    title: "Yoo, sure Deep",
    send: true,
  },
  {
    id: "4",
    title: "Let me find that presentation at my laptop, give me a second!",
    time: "4.50pm",
    send: true,
  },
  {
    id: "5",
    title: "Yes sure, take your time Brian",
    time: "4.55pm",
    send: false,
  },
  {
    id: "6",
    title: "History of animal Biolo...",
    time: "4.56pm",
    send: true,
  },
  {
    id: "7",
    title: "Thank you for helping me! ❤ You save my life hahaha! ",
    time: "4.57pm",
    send: false,
  },
  {
    id: "8",
    title: "You, sure Deep👍 ",
    time: "4.58pm",
    send: true,
  },
  {
    id: "1",
    title: "Hi, yatin👋!",
    send: false,
  },
  {
    id: "2",
    title:
      "Cna you send presentation file form Mr. Alex i lost it and cant find that 😢.",
    time: "4.40pm",
    send: false,
  },
  {
    id: "3",
    title: "Yoo, sure Deep",
    send: true,
  },
  {
    id: "4",
    title: "Let me find that presentation at my laptop, give me a second!",
    time: "4.50pm",
    send: true,
  },
  {
    id: "5",
    title: "Yes sure, take your time Brian",
    time: "4.55pm",
    send: false,
  },
  {
    id: "6",
    title: "History of animal Biolo...",
    time: "4.56pm",
    send: true,
  },
  {
    id: "7",
    title: "Thank you for helping me! ❤ You save my life hahaha! ",
    time: "4.57pm",
    send: false,
  },
  {
    id: "8",
    title: "You, sure Deep👍 ",
    time: "4.58pm",
    send: true,
  },
];

const SingleChat = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;

  const moresheet = React.useRef();

  return (
    <SafeAreaView style={{ backgroundColor: "#112036", flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={"#112036"} />
      <View style={GlobalStyleSheet.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ width: 18, height: 18, tintColor: "#fff" }}
                source={IMAGES.arrowleft}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("status", {
                  name: "Deepesh Gour",
                  image: IMAGES.profile2,
                  statusData: [IMAGES.profilepic10, IMAGES.profilepic16],
                })
              }
              style={{ marginRight: 10, marginLeft: 10 }}
            >
              <View>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 50 }}
                  source={IMAGES.profile2}
                />
                <Image
                  style={{
                    width: 48,
                    height: 48,
                    position: "absolute",
                    bottom: -4,
                    right: -4,
                  }}
                  source={IMAGES.cricle}
                />
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("AnotherProfile")}
              >
                <Text
                  style={{
                    ...FONTS.font,
                    ...FONTS.fontMedium,
                    color: "#fff",
                    marginBottom: 2,
                  }}
                >
                  Deepesh Gour
                </Text>
              </TouchableOpacity>
              <Text style={{ ...FONTS.fontXs, color: "#fff", opacity: 0.7 }}>
                online
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Call")}
              style={{ padding: 10 }}
            >
              <Image
                style={[GlobalStyleSheet.image, { tintColor: "#fff" }]}
                source={IMAGES.call}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Video")}
              style={{ padding: 10 }}
            >
              <Image
                style={[GlobalStyleSheet.image, { tintColor: "#fff" }]}
                source={IMAGES.video}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => moresheet.current.openSheet()}
              style={{ padding: 10 }}
            >
              <Image
                style={[GlobalStyleSheet.image, { tintColor: "#fff" }]}
                source={IMAGES.more}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: theme.dark ? colors.background : "#fff",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingHorizontal: 20,

            paddingTop: 20,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
              {ChatData.map((data, index) => {
                return (
                  <View key={index}>
                    <View
                      style={[
                        {
                          width: "75%",
                          marginBottom: 10,
                        },
                        data.send == false
                          ? {
                              marginRight: "auto",
                              alignItems: "flex-start",
                            }
                          : {
                              marginLeft: "auto",
                              alignItems: "flex-end",
                            },
                      ]}
                    >
                      <View
                        style={[
                          data.send == false
                            ? {
                                backgroundColor: COLORS.background,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                              }
                            : {
                                backgroundColor: COLORS.primary,

                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomLeftRadius: 10,
                              },
                        ]}
                      >
                        <Text
                          style={{
                            ...FONTS.font,
                            ...FONTS.fontRegular,
                            color: data.send ? COLORS.white : COLORS.title,
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                          }}
                        >
                          {data.title}
                        </Text>
                      </View>
                      {data.time && (
                        <Text
                          style={{
                            ...FONTS.fontXs,
                            ...FONTS.fontRegular,
                            color: COLORS.title,
                            opacity: 0.4,
                            marginTop: 3,
                          }}
                        >
                          {data.time}
                        </Text>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            backgroundColor: theme.dark ? colors.background : colors.card,
            paddingHorizontal: 15,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                zIndex: 1,
                position: "absolute",
                top: 13,
                left: 15,
              }}
            >
              <Image
                style={{
                  tintColor: colors.text,
                  width: 20,
                  height: 20,
                }}
                source={IMAGES.happy}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Send your message..."
              placeholderTextColor={colors.placeholder}
              style={[
                GlobalStyleSheet.inputBox,
                {
                  backgroundColor: colors.input,
                },
              ]}
            />
            <TouchableOpacity
              style={{
                zIndex: 1,
                position: "absolute",
                top: 13,
                right: 50,
              }}
            >
              <Image
                style={{
                  tintColor: colors.title,
                  opacity: 0.5,
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                }}
                source={IMAGES.camera}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                zIndex: 1,
                position: "absolute",
                top: 13,
                right: 15,
              }}
            >
              <Image
                style={{
                  tintColor: colors.primary,
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                }}
                source={IMAGES.send}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <ChatoptionSheet ref={moresheet} />
    </SafeAreaView>
  );
};

export default SingleChat;
