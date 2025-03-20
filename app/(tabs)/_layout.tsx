import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const _layout = () => {

  const TabIcon = ({focused,icons,title}:any) => {

    if (focused){
      return (
        <ImageBackground source={images.highlight} className="flex flex-row w-full flex-1 min-w-[100px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden">
  
                  <Image source= {icons} tintColor="#151312" className="size-5"/>
                  <Text className="text-secondary text-base font-semibold">{title}</Text>
  
                </ImageBackground>
      )
    }

    else{
      return(
        <View className="size-full justify-center items-center mt-1">
          <Image source={icons} tintColor="#A8B5DB" className="size-5"/>

        </View>
      )
    }

    
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom:36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderBlockColor:"#0F0D23",
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
             <TabIcon focused={focused}
                      icons = {icons.home}
                      title ="Home"
             />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}
                     icons = {icons.search}
                     title ="search"
            />
         ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}
                     icons = {icons.save}
                     title ="saved"
            />
         ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}
                     icons = {icons.person}
                     title ="profile"
            />
         ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
