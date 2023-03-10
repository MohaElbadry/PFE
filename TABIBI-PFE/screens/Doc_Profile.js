import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Doc_Profile({ navigation }) {
  return (
    <View className="flex-1 flex-col items-center mp-4 ">
      <View className=" flex  bg-[#1C6BA4] w-full px-4 pb-8 rounded-b-3xl drop-shadow-xl flex-row pt-16 justify-between">
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text className="text-xl text-white font-extrabold">Détails</Text>
        <Text className="text-xl text-[#1C6BA4]  font-extrabold">{"jj "}</Text>
      </View>
      <View className=" items-center mt-3">
        <View className="flex-row max-h-24 p-3 w-72 items-center mt-3 bg-white border-white rounded-md border-2 drop-shadow-md">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
            className="h-16 self-start w-16 drop-shadow-xl rounded-lg "
          />
          <View className="ml-3 flex flex-col ">
            <Text className="font-bold mt-2 "> name</Text>
            <Text className="text-gray-400 text-xs w-44"> lpreammmmmmmm</Text>
          </View>
        </View>
      </View>
      <View className="mt-7 w-full pl-5">
        <View className="mx-6 bg-white p-2 rounded-xl">
          <View className="mx-3">
            <Text className="mb-2 font-bold">About</Text>
            <View className="flex-row">
              <Text className="font-light text-gray-500 text-base">
                Adresse :{" "}
              </Text>
              <Text className="font-light text-gray-500 text-sm">LORRR</Text>
            </View>
            <View className="flex-row">
              <Text className="font-light text-gray-500 text-base">
                Urgence :
              </Text>
              <Text className="font-light text-gray-500 text-sm">
                {" "}
                Texttttt
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="absolute -bottom-0 self-center bg-white rounded-2xl h-14 p-3 w-full ">
        <View className="flex-row space-x-14  align-middle justify-center  items-center justify-items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Doc_Home_Screeen")}
          >
            <AntDesign name="home" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Doc_Chat")}>
            <View className=" bg-orange-600 rounded-full h-12 w-12 flex justify-center items-center">
              <AntDesign name="pluscircleo" size={28} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Doc_Profile")}>
            <AntDesign name="user" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
