import { Image, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Pat_Home_Screen({ navigation }) {
  return (
    <View
      className="pt-16 flex-1  "
      style={{
        backgroundColor: "#F6F6F6",
      }}
    >
      <View className="w-full mx-4 ">
        <Text className="text-[#002B20] font-semibold text-4xl mx-2">
          Tabibi
        </Text>
        <Text className="text-[#00916E] mt-6 text-3xl  mx-4">Hello [Name]</Text>
        <Text className="text-[#002B20] font-bold text-4xl  mx-4">Explore</Text>
      </View>
      <View className="bg-[#4DCFC0] mx-4 mt-5 w-fit drop-shadow-xl rounded-lg">
        <View className="flex-row mx-2 -mt-3">
          <View className="w-56 justify-center">
            <Text className="text-[#002B20] text-2xl mt-4 font-bold">
              Get the best Medical Service
            </Text>
            <Text className="text-[#828282] text-lg mb-3 ">
              Providing the best medical service emergency{" "}
            </Text>
          </View>
          <Image
            source={require("../assets/Png-Doc.png")}
            className="w-28 h-36 
             from-neutral-50 "
          />
        </View>
      </View>
      <View className="mt-4 w-full p-4">
        <Text className=" text-lg font-bold ">
          We ensure best insurence for our clients
        </Text>
        <Text className="mt-5 text-lg text-[#726E6E] ">Recommended Doctor</Text>
      </View>
      <View className=" items-center mx-5 drop-shadow-2xl">
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
            <Text className="text-gray-400 text-xs w-44">Adresse</Text>
          </View>
        </View>
      </View>
      <View className="absolute -bottom-0 self-center bg-white rounded-2xl h-14 p-3 w-full ">
        <View className="flex-row space-x-10  align-middle justify-center  items-center justify-items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Pat_Home_Screen")}
          >
            <AntDesign name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Pat_List_Doc")}>
            <Entypo name="list" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <View className=" bg-[#FF0000] rounded-full h-10 w-10 flex justify-center items-center">
              <AntDesign name="pluscircleo" size={28} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Ionicons name="chatbox-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <AntDesign name="user" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
