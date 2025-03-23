import Searchbar from "@/components/Searchbar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { getTrendingmovies } from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingmovies);

  const {
    data: movies,
    loading: moviesLoding,
    error: moivesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const renderTrendingMovies = () => {
    if (!trendingMovies) return null;
    
    return (
      <View className="mt-10">
        <Text className="text-lg text-white font-bold mb-3">
          Trending Movies
        </Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 5 }}
        >
          {trendingMovies.map((item, index) => (
            <View key={item.movie_id.toString()} className="mr-4">
              <TrendingCard movie={item} index={index} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        style={{
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoding || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moivesError || trendingError ? (
          <Text>Error:{moivesError?.message || trendingError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <Searchbar
              onPress={() => {
                router.push("/search");
              }}
              placeholder="search for a movie"
            />

            {renderTrendingMovies()}

            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Latest Movies
            </Text>

            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}