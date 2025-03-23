import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "@/constants/images";
import MovieCard from "@/components/MovieCard";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/usefetch";
import { icons } from "@/constants/icons";
import Searchbar from "@/components/Searchbar";
import { updateSearchCount } from "@/services/appwrite";

const search = () => {
  const [searchquery, setSearchquery] = useState("");

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchquery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchquery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchquery]);

  useEffect(() => {
    if (movies?.length > 0 && movies?.[0]) {
      updateSearchCount(searchquery, movies[0]);
    }
  }, [movies]);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 itmes-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <Searchbar
                placeholder="search movies..."
                value={searchquery}
                onChangeText={(text: string) => setSearchquery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && searchquery.trim() && movies?.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Search results for {""}
                <Text className="text-accent">{searchquery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchquery.trim() ? "No Movie Found." : "Search for a Movie."}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default search;
