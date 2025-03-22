import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import MovieCard from "@/components/MovieCard";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/usefetch";
import { icons } from "@/constants/icons";
import Searchbar from "@/components/Searchbar";


const search = () => {
  const router = useRouter();

  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" />
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieCard {...item}/>}
        keyExtractor={(item)=>item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap:16,
          marginVertical:16
        }}
        contentContainerStyle={{paddingBottom:100}}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 itmes-center">
              <Image source={icons.logo} className="w-12 h-10"/>
            </View>
            <View className="my-5">
              <Searchbar placeholder="search movies..."/>
            </View>

            {loading && (
              <ActivityIndicator size="large" color='#0000ff' className="my-3"/> 
            )}

            {error &&(
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && `SEARCH TERM`.trim() && movies?.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Search results for {''}
                <Text className="text-accent">Search term</Text>
              </Text>
            )}

          </>
        }
      />
      
    </View>
  );
};

export default search;
