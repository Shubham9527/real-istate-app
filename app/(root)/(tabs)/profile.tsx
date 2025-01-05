import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";

const Profile = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5"/>
        </View>
        <View className="flex flex-row justify-center mt-5">
          <View className="flex items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9"/>
            </TouchableOpacity>

            {/*TODO: replace user name here*/}
            <Text className="text-2xl font-rubik-bold mt-2">Shubham Nikam</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Profile
