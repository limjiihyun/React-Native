import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./component/Home/HomeScreen";
import SettingsScreen from "./component/Home/settingScreen";
import PlusScreen from "./component/Home/PlusScreen";
import MainScreen from "./component/Home/MainScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "limegreen", // 선택된 탭 아이콘의 색상
          inactiveTintColor: "gray", // 선택되지 않은 탭 아이콘의 색상
          style: {
            backgroundColor: "yellow", // 탭 바의 배경색
            borderTopWidth: 0, // 상단 경계선 제거
            height: 30,
          },
          labelStyle: {
            fontSize: 14, // 탭 라벨의 크기
            fontWeight: "bold", // 탭 라벨의 글꼴 굵기
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle: { backgroundColor: "midnightblue" },
          }}
        />
        <Tab.Screen name="plus" component={MainScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
