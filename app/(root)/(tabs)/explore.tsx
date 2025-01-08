import {Text, View, Image, TouchableOpacity, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";

import Search from "@/components/Search";
import {Card} from "@/components/Cards";
import Filters from "@/components/Filters";

import {cards} from "@/constants/data";
import icons from "@/constants/icons";

export default function Explore() {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={cards}
        keyExtractor={(item) => item.name.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Card
          item={item}/>}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity onPress={() => router.back()}
                                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center">
                <Image source={icons.backArrow} className="size-5"/>
              </TouchableOpacity>
              <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">Search for ideal
                properties</Text>
              <Image source={icons.bell} className="w-6 h-6"/>
            </View>
            <Search/>
            <View className="mt-5">
              <Filters/>
              <Text className="text-xl font-rubik-bold text-black-300 mt-5">Found 4 properties</Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
