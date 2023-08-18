import * as React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Button,
  Image,
} from "react-native";

const backgroundimg = {
  uri: "https://cdn.edujin.co.kr/news/photo/202102/35064_66361_141.jpg",
};

export default function PlusScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Plus!</Text>
      </View>
    );
  }