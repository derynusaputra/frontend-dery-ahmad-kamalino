import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES, SIZES } from "../../constants/theme";
import LinearGradient from "react-native-linear-gradient";
import { GlobalStyleSheet } from "../../constants/styleSheet";

const likeData = [
  {
    id: "1",
    image: IMAGES.slderPic1,
    name: "Harleen",
    age: "24",
    about: "Product Designer",
  },
  {
    id: "2",
    image: IMAGES.slderPic2,
    name: "Richard",
    age: "22",
    about: "Job Holder",
  },
  {
    id: "3",
    image: IMAGES.slderPic3,
    name: "Harleen",
    age: "25",
    about: "Product Designer",
  },
  {
    id: "4",
    image: IMAGES.slderPic4,
    name: "Harleen",
    age: "22",
    about: "Product Designer",
  },
  {
    id: "5",
    image: IMAGES.slderPic5,
    name: "Harleen",
    age: "21",
    about: "Product Designer",
  },
];

const Likes = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.cardBg,
      }}
    >
      <View style={GlobalStyleSheet.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Text style={{ ...FONTS.h4, color: colors.title, flex: 1 }}>
            Your Likes
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
        >
          <View style={GlobalStyleSheet.row}>
            {likeData.map((data, index) => {
              return (
                <View
                  key={index}
                  style={[
                    GlobalStyleSheet.col50,
                    {
                      marginBottom: 15,
                    },
                  ]}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderColor,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate("ProfileDetail", { item: data })
                      }
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: undefined,
                          aspectRatio: 1 / 1.2,
                          borderRadius: SIZES.radius,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                        source={data.image}
                      />
                      <LinearGradient
                        colors={[
                          "rgba(0,0,0,0)",
                          "rgba(0,0,0,0)",
                          "rgba(0,0,0,1)",
                        ]}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          bottom: 0,
                          borderRadius: SIZES.radius,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          paddingHorizontal: 12,
                          paddingVertical: 12,
                        }}
                      >
                        <Text
                          style={[
                            FONTS.h6,
                            { color: COLORS.white, lineHeight: 18 },
                          ]}
                        >
                          {data.name}, {data.age}
                        </Text>
                        <Text
                          style={[
                            FONTS.fontSm,
                            { color: COLORS.white, opacity: 0.7 },
                          ]}
                        >
                          {data.about}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        marginTop: 10,
                        paddingHorizontal: 10,
                        marginBottom: 10,
                      }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                          height: 35,
                          backgroundColor: "rgba(255,74,92,.15)",
                          borderRadius: 6,
                          borderWidth: 1,
                          borderColor: "rgba(255,74,92,.25)",
                          alignItems: "center",
                          justifyContent: "center",
                          flex: 1,
                        }}
                      >
                        <Image
                          style={{
                            height: 14,
                            width: 14,
                            tintColor: COLORS.danger,
                            resizeMode: "contain",
                          }}
                          source={IMAGES.close}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                          height: 35,
                          backgroundColor: "rgba(186,112,255,.15)",
                          borderRadius: 6,
                          borderWidth: 1,
                          borderColor: "rgba(186,112,255,.25)",
                          alignItems: "center",
                          justifyContent: "center",
                          flex: 1,
                        }}
                      >
                        <Image
                          style={{
                            height: 20,
                            width: 20,
                            tintColor: "#BA70FF",
                            resizeMode: "contain",
                          }}
                          source={IMAGES.heart2}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Likes;
