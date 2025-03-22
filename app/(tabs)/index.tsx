import Searchbar from "@/components/Searchbar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoding,
    error: moivesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <View
        className="flex-1 px-5"
        style={{
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10  mt-20 mb-5 mx-auto" />

        {moviesLoding ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moivesError ? (
          <Text>Error:{moivesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <Searchbar
              onPress={() => {
                router.push("/search");
              }}
              placeholder="search for a movie"
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList
                data={movies}
                renderItem={({item}) =>(
                  <Text className="text-white text-sm">
                    {item.title}
                  </Text>
                )}
                keyExtractor={(item)=>item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap:20,
                  paddingRight:5,
                  marginBottom:10,
                }}

                className="mt-2 pb-32"
                scrollEnabled={false}
              />

            </>
          </View>
        )}
      </View>
    </View>
  );
}
