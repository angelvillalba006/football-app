import React, { useState, useRef } from "react";
import { View, FlatList, StyleSheet, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import onboardingData from "../data/json/onboardingSlides";
import OnboardingSlide from "../components/molecules/onboarding/Slide";
import Paginator from "../components/molecules/onboarding/Paginator";
import NextButton from "../components/atoms/onboarding/Button";
import { useNavigation } from "@react-navigation/native";
interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const OnboardingPage = () => {
  const navigation = useNavigation() as any;
  const renderItem = ({ item }: { item: OnboardingItem }) => {
    return <OnboardingSlide item={item} />;
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList | null>(null);
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < onboardingData.length - 1) {
      slidesRef?.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        AsyncStorage.setItem("viewedOnboarding", "true");
        navigation.navigate("Navigation");
      } catch (error) {
        console.error("Error @setItem: ", error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={onboardingData}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={onboardingData} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / onboardingData.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingPage;
