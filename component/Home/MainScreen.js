import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import { useState } from "react";

function DayOfWeek({ day }) {
  return <Text style={todayEmotion.monthText}>{day}</Text>;
}

function DaysOfWeekRow() {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <View style={todayEmotion.monthContainer}>
      {daysOfWeek.map((day) => (
        <DayOfWeek key={day} day={day} />
      ))}
    </View>
  );
}

function TodayEmotion() {
  return (
    <View style={todayEmotion.viewContainer}>
      <View style={todayEmotion.topContainer}>
        <Text>Daily check-in</Text>
        <View style={todayEmotion.coinContainer}>
          <Image
            source={{
              uri: "https://png.pngtree.com/png-vector/20210501/ourmid/pngtree-golden-bitcoin-coin-png-image_3254508.jpg",
            }}
            style={todayEmotion.coinimg}
          />
          <Text>1</Text>
        </View>
      </View>
      <Text>This week</Text>
      <DaysOfWeekRow></DaysOfWeekRow>
      <DaysOfWeekRow></DaysOfWeekRow>
    </View>
  );
}

function Progress_Kwitter() {
  return (
    <View style={kwitterStyle.container}>
      <Text>Kwitter for</Text>
      <Text>03</Text>
      <Text>03</Text>
      <Text>03</Text>
    </View>
  );
}

const kwitterStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 140,
    backgroundColor: "cornflowerblue",
    borderRadius: 10,
  },
});

function Progress_Side({ title }) {
  return (
    <View style={Progress_SideStyle.container}>
      <Text>{title}</Text>
    </View>
  );
}

function Progress_Side2({ title }) {
  return (
    <View style={Progress_SideStyle.container2}>
      <Text>{title}</Text>
    </View>
  );
}

const Progress_SideStyle = StyleSheet.create({
  container: {
    width: "48%",
    height: 120,
    backgroundColor: "cornflowerblue",
    borderRadius: 10,
    marginTop: 20,
  },
  container2: {
    width: "48%",
    height: 120,
    backgroundColor: "cornflowerblue",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 14,
  },
});

function MainTitleText({ title }) {
  return (
    <View>
      <Text style={mainTitleText.text}>{title}</Text>
    </View>
  );
}

const Item = ({ title }) => (
  <View
    style={{
      backgroundColor: "cornflowerblue",
      padding: 52,
      marginTop: 10,
      marginHorizontal: 0,
    }}
  >
    <Text style={{ color: "black", fontSize: 20 }}>{title}</Text>
  </View>
);

const DATA = [
  {
    title: 1,
  },
  {
    title: 2,
  },
  {
    title: 3,
  },
  {
    title: 4,
  },
  {
    title: 5,
  },
  {
    title: 6,
  },
  {
    title: 7,
  },
  {
    title: 8,
  },
  {
    title: 9,
  },
];

export default function MainScreen() {
  const [containerWidth, setContainerWidth] = useState(0);

  const margins = 10 * 2;
  const numColumns = 3;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TodayEmotion />
        <MainTitleText title="My progress" />
        <Progress_Kwitter></Progress_Kwitter>
        <View>
          <View style={styles.progress_side_container}>
            <Progress_Side title="Money"></Progress_Side>
            <Progress_Side2 title="Life"></Progress_Side2>
          </View>
          <View style={styles.progress_side_container}>
            <Progress_Side title="Money"></Progress_Side>
            <Progress_Side2 title="Life" style={styles.ht}></Progress_Side2>
          </View>
        </View>
        <MainTitleText title="My goals" />
        <Progress_Kwitter></Progress_Kwitter>
        <View style={{ paddingHorizontal: 0 }}>
          <FlatList
            data={DATA}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 10,
            }}
            onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                width={(containerWidth - margins) / numColumns}
              />
            )}
            keyExtractor={(item, index) => index}
            numColumns={numColumns}
          />
        </View>
        <MainTitleText title="My challenges" />
        <Progress_Kwitter></Progress_Kwitter>
        <MainTitleText title="My daily statistics" />
      </ScrollView>
    </SafeAreaView>
  );
}

const mainTitleText = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 25,
  },
});

const todayEmotion = StyleSheet.create({
  viewContainer: {
    width: "100%",
    height: 160,
    backgroundColor: "cornflowerblue",
    borderRadius: 10,
  },
  coinimg: {
    width: 40,
    height: 40,
  },
  coinContainer: {
    flexDirection: "row",
    marginLeft: 200,
  },
  topContainer: {
    flexDirection: "row",
  },
  monthContainer: {
    flexDirection: "row",
  },
  monthText: {
    marginLeft: 30,
    marginTop: 15,
    color: "white",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  progress_side_container: {
    flexDirection: "row",
  },
  ht: {
    marginLeft: 10,
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
