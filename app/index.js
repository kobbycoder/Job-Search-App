import { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { COLORS, icons, images, SIZES } from '../constants'
import { Stack, useRouter } from 'expo-router'
import { NearbyJobCard, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'


const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.lightWhite,

    }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          )
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
          >
          <Welcome />
          <Popularjobs />
          <NearbyJobCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
