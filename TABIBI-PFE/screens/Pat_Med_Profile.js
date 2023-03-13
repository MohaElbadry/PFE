import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Pat_Med_Profile({ navigation }) {
  return (
    <View className="flex-1 flex-col items-center mp-4 ">
      <View className=" flex  bg-[#1C6BA4] w-full px-4 pb-8 rounded-b-3xl drop-shadow-xl flex-row pt-16 justify-between">
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text className="text-xl text-white font-extrabold">
          Ajouter Traitement
        </Text>
        <Text className="text-xl text-[#4DCFC0]  font-extrabold"> </Text>
      </View>
      <View className=" items-center mt-5 mx-5 drop-shadow-2xl">
        <View className="flex-row max-h-24 w-full  items-center mt-3 bg-white border-white rounded-xl border-2 drop-shadow-2xl">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
            className="h-16 self-start w-16 m-2 drop-shadow-xl rounded-lg "
          />
          <View className="ml-3 flex flex-col ">
            <Text className="font-bold text-xl mt-2 ">Dr. Wilson</Text>
            <Text className="text-gray-400 text-xs w-44">
              General Pulmonologist
            </Text>
          </View>
        </View>
      </View>
      <View className="mt-16 w-full pl-5">
        <View className="mx-6 bg-white p-2 rounded-xl">
          <View className="mx-3">
            <Text className="mb-2 font-bold">About</Text>
            <View className="flex-row">
              <Text className="font-light text-gray-500 text-base">
                Adresse :
                {"MBBS, Ph.D., Fellow, International College of Surgeons."}
              </Text>
            </View>
            <View className="flex-row">
              <Text className="font-light text-gray-500 text-sm">{"jjj"}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
