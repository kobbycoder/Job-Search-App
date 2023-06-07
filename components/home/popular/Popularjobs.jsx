import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { SIZES, COLORS } from "../../../constants";
import styles from "./popularjobs.style";
import PopoularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  
  const  { data, isLoading, error } = useFetch('search',
    {
      query: 'React Developer',
      num_pages: 1,
    }
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> :
          error ? <Text>Something went wrong</Text> : <FlatList 
            data={data}
            renderItem={ ({ item }) => (
              <PopoularJobCard 
                item={item}
              />
            )}
            horizontal
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        }
      </View>
    </View>
  );
};

export default Popularjobs;
