import * as React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

const coinimg = {
  uri: "https://png.pngtree.com/png-vector/20210501/ourmid/pngtree-golden-bitcoin-coin-png-image_3254508.jpg",
};

function DayOfWeek({ day }) {
  return <Text style={styles.monthEmotion}>{day}</Text>;
}

function DaysOfWeekRow() {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <View style={styles.monthContainer}>
      {daysOfWeek.map((day) => (
        <DayOfWeek key={day} day={day} />
      ))}
    </View>
  );
}
function Coin() {
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: "https://png.pngtree.com/png-vector/20210501/ourmid/pngtree-golden-bitcoin-coin-png-image_3254508.jpg",
        }}
        style={styles.coinimg}
      />
      <Text style={styles.coinText}>1</Text>
    </View>
  );
}
function MainText() {
  return (
    <View>
      <Text style={progress.mainText}>My progress</Text>
    </View>
  );
}
function Kwitter() {
  return (
    <View style={progress.kwitterContainer}>
      <Text>Kwitter for</Text>
      <View>
        <Text>03</Text>
        <Text>28</Text>
        <Text>35</Text>
      </View>
    </View>
  );
}
function MoneySave() {
  return (
    <View style={progress.moneyContainer}>
      <Text>Money</Text>
      <Text>0</Text>
    </View>
  );
}

export default function SettingsScreen() {
  return (
    <View>
  
      <View style={progress.allContainer}>
        <View style={styles.emotionContainer}>
          <View style={styles.emotionTopContainer}>
            <Text style={styles.dailyText}>Daily check-in</Text>
            <Coin />
          </View>
          <Text style={styles.dailyText2}>This week</Text>
          <DaysOfWeekRow style={styles.monthEmotion} />
          <DaysOfWeekRow style={styles.monthText} />
        </View>
        <MainText />
        <Kwitter />
        <View style={progress.sideContainer}>
          <MoneySave />
          <MoneySave />
        </View>
        <View style={progress.sideContainer}>
          <MoneySave />
          <MoneySave />
        </View>
      </View>
      </View>
  );
}

const progress = StyleSheet.create({
  allContainer: {
    backgroundColor: "yellow",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
  },
  mainText: {
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 30,
    marginTop: 15,
  },
  kwitterContainer: {
    width: "95%",
    height: "20%",
    backgroundColor: "cornflowerblue",
    margin: 10,
    borderRadius: 10,
  },
  moneyContainer: {
    width: "45%",
    height: "80%",
    backgroundColor: "cornflowerblue",
    margin: 10,
    borderRadius: 10,
  },
  sideContainer: {
    flexDirection: "row",
    height: "15%",
    backgroundColor: "red",
  },
  view: {
    backgroundColor: "yellow",
  },
});

const styles = StyleSheet.create({
  emotionContainer: {
    width: "95%",
    height: "30%",
    backgroundColor: "cornflowerblue",
    margin: 10,
    borderRadius: 10,
  },
  emotionTopContainer: {
    flexDirection: "row",
  },
  dailyText: {
    margin: 10,
    color: "white",
    fontWeight: "bold",
  },
  dailyText2: {
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
  },
  monthContainer: {
    flexDirection: "row",
  },
  monthEmotion: {
    fontSize: 15,
    marginLeft: 35,
    marginTop: 20,
    color: "white",
  },
  monthText: {
    fontSize: 15,
    marginLeft: 35,
    marginTop: 30,
    color: "white",
  },
  coinContainer: {
    width: "15%",
    height: "90%",
    flexDirection: "row",
    marginLeft: 160,
    marginTop: 10,
  },
  coinimg: {
    width: "80%",
    height: "100%",
  },
  coinText: {
    color: "yellow",
    margin: 10,
  },
});
