import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const _layout = () => {

  

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={images.highlight} className="flex flex-row w-full flex-1 min-w-[100px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">

                <Image source= {icons.home} tintColor="#151312" className="size-5"/>
                <Text className="text-secondary text-base font-semibold">Home</Text>

              </ImageBackground>
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
