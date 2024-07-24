import React from "react";
import Gap from "components/Gap/Gap";
import {sizes} from "constants/sized";
import {Pressable, StyleSheet, Text} from "react-native";
import {Button, View} from "react-native";
import Swiper from "react-native-deck-swiper";
import {ScrollView} from "react-native-gesture-handler";

const SliderImageScreen = () => {
  return (
    <Swiper
      cards={["DO", "MORE", "OF", "WHAT", "MAKES", "YOU", "HAPPY"]}
      containerStyle={{
        backgroundColor:"green",
        margin: 0,
        marginVertical: 0,
        marginHorizontal: 0,
        paddingHorizontal: 0,
        paddingVertical: 0
      }}
      renderCard={(card) => {
        return (
          <Pressable style={styles.cardContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{height: sizes(200), backgroundColor: "red"}} />
              <Text style={styles.text}>{card}</Text>
              <View style={{height: sizes(200), backgroundColor: "red"}} />
              <Gap height={30} />
              <View style={{height: sizes(200), backgroundColor: "red"}} />
              <Gap height={30} />
              <View style={{height: sizes(200), backgroundColor: "red"}} />
            </ScrollView>
          </Pressable>
        );
      }}
      onSwiped={(cardIndex) => {
        console.log(cardIndex);
      }}
      cardIndex={0}
      backgroundColor={"#4FD0E9"}
      verticalSwipe={false}
      stackSize={3}
    />
  );
};

export default SliderImageScreen;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
  },
  cardContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
});
