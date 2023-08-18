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

export default function HomeScreen() {
    return (
      <View style={styles.view}>
        <ImageBackground source={backgroundimg} style={styles.imagebackground}>
          <Text style={styles.title}>MyChallenges</Text>
          <Text style={styles.addbutton}>Add a new challenge</Text>
          <Text style={styles.title}>My daily statistics</Text>
          <Image
            style={styles.graphimg}
            source={{
              uri: "https://previews.123rf.com/images/tang90246/tang902461206/tang90246120600005/13894128-%EA%B7%B8%EB%9E%98%ED%94%84%EC%9D%98-%EC%A6%9D%EA%B0%80.jpg",
            }}
          ></Image>
          <Text style={styles.title}>Awesome!</Text>
  
          <View style={styles.roundcontainer}>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>2</Text>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.roundcontainer}>
            <Text style={styles.text}>4</Text>
            <Text style={styles.text}>5</Text>
            <Text style={styles.text}>6</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

const styles= StyleSheet.create({
     text: {
    color: "black",
    backgroundColor: "#F0E68C",
    width: 70,
    height: 70,
    borderRadius: 40,
    textAlign: "center",
    lineHeight: 60, // 텍스트의 높이와 동일한 값으로 설정
    margin: 20,
  },
  view: {
    flex: 1,
    
  },
  imagebackground: {
    flex: 1,
  },
  roundcontainer: {
    width: "75%",
    height: "20%",
    flexDirection: "row",
    marginLeft: 50,
  },
  title: {
    color: "white",
    fontSize: 25,
    margin: 10,
    fontWeight: "bold",
  },
  addbutton: {
    width: "90%",
    height: "10%",
    backgroundColor: "#7B68EE",
    fontSize: 15,
    color: "white",
    lineHeight: 60, // 텍스트의 높이와 동일한 값으로 설정
    margin: 10,
    borderRadius: 8,
  },
  graphimg: {
    width: "30%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 130,
  },
})