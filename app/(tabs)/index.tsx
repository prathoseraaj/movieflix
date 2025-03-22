import Searchbar from "@/components/Searchbar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
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
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
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
              <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
