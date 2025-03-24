import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useFetch from "@/services/usefetch";
import { fetchMoiveDetails } from "@/services/api";
import { icons } from "@/constants/icons";

const MoiveDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMoiveDetails(id as string)
  );

  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col item-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl ">{movie?.title}</Text>
          <View className="flex-row item-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm ">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-light-200 text-sm ">{movie?.runtime}m</Text>
          </View>
          <View className="flex-row item-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} />
            <Text className="text-white text-sm font-bold">
              {Math.round(movie?.vote_average ?? 0) }/ 10
            </Text>
            <Text className="text-light-200 text-sm">({movie?.vote_count} votes)</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MoiveDetails;
