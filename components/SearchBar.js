import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function SearchBar({ fetchWeather }) {
  const [cityName, setcityName] = useState("");
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search"
        value={cityName}
        onChangeText={(text) => setcityName(text)}
      />
      <AntDesign
        name="search1"
        size={20}
        color="black"
        onPress={() => {
          fetchWeather(cityName);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchBar: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: "lightgray",
    borderColor: "lightgray",
  },
});
