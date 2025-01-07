import {Text, View, Image, TouchableOpacity, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import Search from "@/components/Search";

import images from "@/constants/images";
import icons from "@/constants/icons";
import {Card, FeaturedCard} from "@/components/Cards";
import Filters from "@/components/Filters";
import {cards, featuredCards} from "@/constants/data";

export default function Index() {
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
              <View className="flex flex-row items-center">
                <Image source={images.avatar} className="size-12 rounded-full"/>
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-black-100 text-xs font-rubik">Good Morning</Text>
                  <Text className="text-base font-rubik-medium text-black-300">Shubham</Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6"/>
            </View>
            <Search/>
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">See all</Text>
                </TouchableOpacity>
              </View>
              <FlatList data={featuredCards}
                        renderItem={({item}) => <FeaturedCard item={item}/>}
                        keyExtractor={(item) => item.name.toString()}
                        horizontal
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerClassName="flex gap-5 mt-5"
              />
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">Our Recommendations</Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">See all</Text>
              </TouchableOpacity>
            </View>
            <Filters/>

          </View>
        }
      />


    </SafeAreaView>
  );
}
