import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {
    console.log("handle login")
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200
          ">Welcome to Real Istate App</Text>
          <Text className="text-3xl text-center text-black-300 font-rubik-bold mt-2">
            Let's get closer to {"\n"} <Text className="text-primary-300">your ideal goals</Text>
          </Text>
          <Text className="text-lg font-rubik text-center text-black-200 mt-12">
            Sign in to get started
          </Text>
          <TouchableOpacity onPress={handleLogin}
                            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
            <View className="flex flex-row items-center justify-center">
              <Image source={icons.google} className="w-5 h-5" resizeMode="contain"/>
              <Text className="text-black-300 text-lg font-rubik-medium ml-2">Sign in with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn
