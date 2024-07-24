import React, {useEffect, useRef, useState} from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  RefreshControl,
} from "react-native";
import {useTheme} from "@react-navigation/native";
import {GlobalStyleSheet} from "../../constants/styleSheet";
import HomeHeader from "./HomeHeader";
import StoryList from "./StoryList";
import PostList from "./PostList";
import PostShareSheet from "../../components/bottomsheet/PostShareSheet";
import PostoptionSheet from "../../components/bottomsheet/PostoptionSheet";
import {sizes} from "../../constants/sized";
import SectionWallet from "./Component/SectionWallet";
import SectionMenu from "./Component/SectionMenu";
import TextCustom from "../../components/Text/TextCustom";
import {FONTS} from "../../constants/theme";
import {useDispatch, useSelector} from "react-redux";
import {onLoginSucces, setProfileData} from "../../store/auth/Account";
import {Satellite} from "../../services/satellite";
import {capitalizeWords} from "../../services/Helper";
import {Icon} from "@rneui/base";

const HomeScreens = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const JWT = useSelector((state) => state.account.token);
  const profile = useSelector((state) => state.account.profileData);

  const theme = useTheme();
  const {colors} = theme;
  const sheetRef = useRef();
  const moresheet = useRef();
  const scrollRef = useRef();
  console.log({JWT});

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      // Tambahkan data baru atau refresh data di sini
      // setData([...data, `Item ${data.length + 1}`]);
      setRefreshing(false);
    }, 1000);
  };

  const getCurrentUser = async () => {
    try {
      const {data} = await Satellite(JWT).get(`/api/user/profile`);
      dispatch(setProfileData(data?.result));
    } catch (error) {
      console.log(error?.response?.data?.msg);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: colors?.green}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{backgroundColor: colors?.green, flex: 1}}>
          <View
            style={{paddingHorizontal: sizes(15), height: sizes(168)}}
          ></View>
          <View
            style={[
              GlobalStyleSheet.loginarea,
              {backgroundColor: colors.white},
            ]}
          ></View>
        </View>

        <View
          style={{
            // backgroundColor: colors?.green,
            flex: 1,
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: 2,
            padding: sizes(15),
          }}
        >
          <View
            style={{
              paddingTop: sizes(15),
              flexDirection: "row",
              width: sizes(344),
              justifyContent: "space-between",
              // backgroundColor: "red",
            }}
          >
            <View
              style={{
                paddingBottom: sizes(50),
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: sizes(12),
                  fontFamily: "Poppins-Regular",
                }}
              >
                Selamat Datang
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: sizes(14),
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                {capitalizeWords(profile?.fullname ?? "")}
              </Text>
            </View>
            <Pressable
              onPress={() => {
                navigation?.navigate("Settings");
              }}
              style={{
                padding: sizes(5),
                // backgroundColor: "red",
                alignSelf: "flex-start",
                borderRadius: sizes(50),
              }}
            >
              <Icon
                name={"settings"}
                type="material"
                size={sizes(27)}
                color={colors?.white}
              />
            </Pressable>
          </View>
          {/* sestion */}
          <SectionWallet
            onPressTopUp={() => {
              navigation?.navigate("TopUpScreen");
            }}
          />
          <SectionMenu />
          {/* <View
            style={{
              // paddingHorizontal: sizes(100),
              marginTop: sizes(30),
              justifyContent: "center",
              alignItems: "center",
              // alignSelf: "flex-start",
              // backgroundColor: colors?.red,
            }}
          >
            <Pressable
              onPress={() => {
                console.log("login");
                dispatch(onLoginSucces(null));
              }}
              style={{
                paddingHorizontal: sizes(16),
                paddingVertical: sizes(10),
                borderRadius: sizes(10),
                justifyContent: "center",
                alignItems: "center",
                // alignSelf: "flex-start",
                backgroundColor: colors?.red,
              }}
            >
              <TextCustom
                value={"LOGOUT"}
                fontSize={sizes(16)}
                color={colors?.white}
                fontFamily={FONTS?.fontsMedium}
              />
            </Pressable>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens;
