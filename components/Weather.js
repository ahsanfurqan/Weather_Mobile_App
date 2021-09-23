import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import SearchBar from "./SearchBar";
import {
  haze,
  rainy,
  snow,
  sunny,
  smoke,
} from "../assets/BackgroundImage/index";

export default function Weather({ weatherData, fetchWeather }) {
  const [backgroundImage, setBackgroundImage] = useState(null);
  //de Structure
  const {
    weather,
    name,
    main: { temp, humidity },
    wind: { speed },
  } = weatherData;
  const [{ main }] = weather;
  useEffect(() => {
    setBackgroundImage(getBackgroundImage(main));
  }, [weatherData]);
  function getBackgroundImage(weather) {
    if (weather == "Snow") return snow;
    if (weather == "Rain") return rainy;
    if (weather == "Clear") return sunny;
    if (weather == "Haze") return haze;
    return haze;
  }
  let textcolor = backgroundImage !== sunny ? "white" : "black";
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="darkgray" />
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImg}
        resizeMode="cover"
      >
        <SearchBar fetchWeather={fetchWeather} />
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              ...styles.headerText,
              color: textcolor,
              fontWeight: "bold",
              fontSize: 40,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              ...styles.headerText,
              color: textcolor,
              fontWeight: "bold",
              fontSize: 40,
            }}
          >
            {main}
          </Text>
          <Text
            style={{
              ...styles.headerText,
              color: textcolor,
              //   fontWeight: "bold",
              fontSize: 40,
            }}
          >
            {temp}°C
          </Text>
        </View>
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Text style={{ fontSize: 22, color: "white" }}>Humidity</Text>
            <Text style={{ fontSize: 22, color: "white" }}>{humidity}%</Text>
          </View>
          <View style={styles.info}>
            <Text style={{ fontSize: 22, color: "white" }}>Wind Speed</Text>
            <Text style={{ fontSize: 22, color: "white" }}>{speed} m/s</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },
  headerText: {
    fontSize: 36,
    marginTop: 40,
  },
  extraInfo: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    padding: 10,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
  },
});
