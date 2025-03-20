import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const _layout = () => {

  const TabIcon = ({focused,icons,title}:any) => {
    return (

      
      <ImageBackground source={images.highlight} className="flex flex-row w-full flex-1 min-w-[100px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">

                <Image source= {icons} tintColor="#151312" className="size-5"/>
                <Text className="text-secondary text-base font-semibold">{title}</Text>

              </ImageBackground>
    )
  }

  return (
    <Tabs>
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
                     title ="Home"
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
                     title ="Home"
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
                     title ="Home"
            />
         ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
