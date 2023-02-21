import { Image, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View
      className="pt-16 "
      style={{
        backgroundColor: "#F6F6F6",
      }}
    >
      <View className="flex-row mx-9">
        <Text className="text-4xl  color-cyan-600 font-extrabold flex-1 drop-shadow-xl">
          Tabibi
        </Text>
        <Image
          source={require("../assets/Logo-Doc.png")}
          className="h-16  w-20 from-neutral-50 drop-shadow-xl rounded-lg "
        />
      </View>
      <View className="mt-3 mx-14 shadow-lg">
        <Text className=" text-2xl color-cyan-600">
          Hello {""}
          <Text className="font-light text-base color-gray-600">Name</Text>
        </Text>
      </View>
      <View className="mx-8 mt-6">
        <Text className="mx-8 mb-4">Services</Text>
        <View className="flex-row space-x-4 mb-3">
          <Image
            source={require("../assets/1.png")}
            className="h-16  w-16 bg-cyan-100 drop-shadow-xl rounded-lg p-3"
          />
          <Image
            source={require("../assets/2.png")}
            className="h-16  w-16 bg-orange-100 drop-shadow-xl rounded-lg p-3"
          />
          <Image
            source={require("../assets/3.png")}
            className="h-16  w-16 bg-cyan-100 drop-shadow-xl rounded-lg p-3"
          />
          <Image
            source={require("../assets/4.png")}
            className="h-16  w-16 bg-pink-100 drop-shadow-xl rounded-lg p-3"
          />
        </View>
      </View>
    </View>
  );
}
