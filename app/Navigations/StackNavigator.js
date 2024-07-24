import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";

import {useTheme} from "@react-navigation/native";
import {StatusBar} from "react-native";
import NFCScreen from "screens/Feature/NfcScreen";
import RiwayatDetailScreen from "screens/Riwayat/Screen/RiwayatDetailScreen";
import TabStyle1 from "../components/Footers/FooterStyle1";
import TabStyle2 from "../components/Footers/FooterStyle2";
import TabStyle3 from "../components/Footers/FooterStyle3";
import TabStyle4 from "../components/Footers/FooterStyle4";
import DataPribadi from "../screens/DataPribadi/DataPribadi";
import FcmScreens from "../screens/Feature/FcmScreens";
import Infaq from "../screens/Infaq/Infaq";
import Pembayaran from "../screens/Pembayaran/Pembayaran";
import DetailPembayaran from "../screens/Pembayaran/Screen/DetailPembayaran";
import PembayaranBerulangScreen from "../screens/Pembayaran/Screen/PembayaranBerulangScreen";
import Pengumuman from "../screens/Pengumuman/Pengumuman";
import Riwayat from "../screens/Riwayat/Riwayat";
import PembayaranSukses from "../screens/StatusScreen/PembayaranSukses";
import AddBank from "../screens/Tabungan/Screen/AddBank";
import VerifikasiBank from "../screens/Tabungan/Screen/VerifikasiBank";
import WithdrawScreen from "../screens/Tabungan/Screen/Withdraw";
import WithdrawFinal from "../screens/Tabungan/Screen/WithdrawFinal";
import Tabungan from "../screens/Tabungan/Tabungan";
import TopUpTransaksi from "../screens/TopUp.js/Screen/TopUpTransaksi";
import TopUpScreen from "../screens/TopUp.js/TopUp";
import ChangePassword from "../screens/auth/ChangePassword";
import Forgot from "../screens/auth/Forgot-password";
import Login from "../screens/auth/Login";
import Otp from "../screens/auth/Otp";
import Register from "../screens/auth/Register";
import Call from "../screens/chat/Call";
import NewChat from "../screens/chat/NewChat";
import SingleChat from "../screens/chat/SingleChat";
import Video from "../screens/chat/Video";
import Comments from "../screens/comment/Comments";
import AccordionScreen from "../screens/components/Accordion";
import ActionModals from "../screens/components/ActionModals";
import ActionSheet from "../screens/components/ActionSheet";
import Badges from "../screens/components/Badges";
import Buttons from "../screens/components/Buttons";
import Charts from "../screens/components/Charts";
import Components from "../screens/components/Components";
import DividerElements from "../screens/components/DividerElements";
import Footers from "../screens/components/Footers";
import Headers from "../screens/components/Headers";
import Inputs from "../screens/components/Inputs";
import ListScreen from "../screens/components/Lists";
import Pricings from "../screens/components/Pricings";
import Snackbars from "../screens/components/Snackbars";
import Socials from "../screens/components/Socials";
import SwipeableScreen from "../screens/components/Swipeable";
import Tables from "../screens/components/Tables";
import Tabs from "../screens/components/Tabs";
import Toggles from "../screens/components/Toggles";
import AllSong from "../screens/createstory/AllSong";
import CreateStory from "../screens/createstory/CreateStory";
import Music2 from "../screens/createstory/Music";
import SavedMusic from "../screens/createstory/SavedMusic";
import HomeScreen from "../screens/home/HomeScreen";
import HomeScreens from "../screens/home/HomeScreens";
import Like from "../screens/like/Like";
import Music from "../screens/music/Music";
import Notification from "../screens/notification/Notification";
import CreatePost from "../screens/post/CreatePost";
import Nextpage from "../screens/post/Nextpage";
import WriteCaption from "../screens/post/WriteCaption";
import AnotherProfile from "../screens/profile/AnotherProfile";
import EditProfile from "../screens/profile/EditProfile";
import Followers from "../screens/profile/Followers";
import ProfilePost from "../screens/profile/ProfilePost";
import ProfileReels from "../screens/profile/ProfileReels";
import Suggestions from "../screens/profile/Suggestions";
import Settings from "../screens/settings/Settings";
import About from "../screens/settings/about/About";
import PrivacyPolicy from "../screens/settings/about/PrivacyPolicy";
import Terms from "../screens/settings/about/Terms";
import Account from "../screens/settings/account/Account";
import Contacts from "../screens/settings/account/Contacts";
import Language from "../screens/settings/account/Language";
import PersonalInformation from "../screens/settings/account/PersonalInformation";
import SettingNotification from "../screens/settings/notification/SettingNotification";
import Save from "../screens/settings/save/Save";
import SavePost from "../screens/settings/save/SavePost";
import SaveReels from "../screens/settings/save/SaveReels";
import LoginActivity from "../screens/settings/security/LoginActivity";
import SavedLogin from "../screens/settings/security/SavedLogin";
import Security from "../screens/settings/security/Security";
import Towfactor from "../screens/settings/security/Towfactor";
import Theme from "../screens/settings/theme/Theme";
import AddStory from "../screens/status/AddStory";
import Status from "../screens/status/Status";
import BottomNavigation from "./BottomNavigation";
import SliderImageScreen from "screens/Feature/SliderImage";
import FeatureTestScreen from "screens/Feature/FeatureTest";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.card}
      />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: "transparent"},
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot-password" component={Forgot} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="homescreen" component={HomeScreen} />
        <Stack.Screen name="createpost" component={CreatePost} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="like" component={Like} />
        <Stack.Screen
          name="status"
          component={Status}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
        <Stack.Screen name="AddStory" component={AddStory} />
        <Stack.Screen name="SingleChat" component={SingleChat} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="NewChat" component={NewChat} />
        <Stack.Screen name="Followers" component={Followers} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="SettingNotification"
          component={SettingNotification}
        />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="LoginActivity" component={LoginActivity} />
        <Stack.Screen name="SavedLogin" component={SavedLogin} />
        <Stack.Screen name="Towfactor" component={Towfactor} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
        />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Suggestions" component={Suggestions} />
        <Stack.Screen name="ProfilePost" component={ProfilePost} />
        <Stack.Screen name="ProfileReels" component={ProfileReels} />
        <Stack.Screen name="AnotherProfile" component={AnotherProfile} />
        <Stack.Screen name="Save" component={Save} />
        <Stack.Screen name="SavePost" component={SavePost} />
        <Stack.Screen name="SaveReels" component={SaveReels} />
        <Stack.Screen name="Components" component={Components} />
        <Stack.Screen name="Accordion" component={AccordionScreen} />
        <Stack.Screen name="ActionSheet" component={ActionSheet} />
        <Stack.Screen name="ActionModals" component={ActionModals} />
        <Stack.Screen name="Buttons" component={Buttons} />
        <Stack.Screen name="Badges" component={Badges} />
        <Stack.Screen name="Charts" component={Charts} />
        <Stack.Screen name="Headers" component={Headers} />
        <Stack.Screen name="Footers" component={Footers} />
        <Stack.Screen name="TabStyle1" component={TabStyle1} />
        <Stack.Screen name="TabStyle2" component={TabStyle2} />
        <Stack.Screen name="TabStyle3" component={TabStyle3} />
        <Stack.Screen name="TabStyle4" component={TabStyle4} />
        <Stack.Screen name="Inputs" component={Inputs} />
        <Stack.Screen name="lists" component={ListScreen} />
        <Stack.Screen name="Pricings" component={Pricings} />
        <Stack.Screen name="Snackbars" component={Snackbars} />
        <Stack.Screen name="DividerElements" component={DividerElements} />
        <Stack.Screen name="Socials" component={Socials} />
        <Stack.Screen name="Swipeable" component={SwipeableScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Tables" component={Tables} />
        <Stack.Screen name="Toggles" component={Toggles} />
        <Stack.Screen name="Nextpage" component={Nextpage} />
        <Stack.Screen name="Music" component={Music} />
        <Stack.Screen name="WriteCaption" component={WriteCaption} />
        <Stack.Screen name="CreateStory" component={CreateStory} />
        <Stack.Screen name="Music2" component={Music2} />
        <Stack.Screen name="AllSong" component={AllSong} />
        <Stack.Screen name="SavedMusic" component={SavedMusic} />

        {/* feature coba */}
        <Stack.Screen name="FcmScreens" component={FcmScreens} />

        {/* mulai Pesantren */}
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="DataPribadi" component={DataPribadi} />
        <Stack.Screen name="Pembayaran" component={Pembayaran} />
        <Stack.Screen name="Tabungan" component={Tabungan} />
        <Stack.Screen name="Infaq" component={Infaq} />
        <Stack.Screen name="Pengumuman" component={Pengumuman} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
        <Stack.Screen
          name="PembayaranBerulangScreen"
          component={PembayaranBerulangScreen}
        />
        <Stack.Screen name="PembayaranSukses" component={PembayaranSukses} />
        <Stack.Screen name="Withdraw" component={WithdrawScreen} />
        <Stack.Screen name="AddBank" component={AddBank} />

        <Stack.Screen name="DetailPembayaran" component={DetailPembayaran} />
        <Stack.Screen name="TopUpScreen" component={TopUpScreen} />
        <Stack.Screen name="TopUpTransaksi" component={TopUpTransaksi} />
        <Stack.Screen name="VerifikasiBank" component={VerifikasiBank} />
        <Stack.Screen name="WithdrawFinal" component={WithdrawFinal} />

        <Stack.Screen
          name="RiwayatDetailScreen"
          component={RiwayatDetailScreen}
        />
        {/* NFC */}

        {/* Feature Test Screen */}
        <Stack.Screen name="FeatureTestScreen" component={FeatureTestScreen} />
        <Stack.Screen name="NFCScreen" component={NFCScreen} />
        <Stack.Screen name="SliderScreen" component={SliderImageScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
