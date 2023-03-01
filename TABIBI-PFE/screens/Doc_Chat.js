import { Image, Text, View, TouchableOpacity } from "react-native";
import Chats from "../components/Chats";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Doc_Chat({ navigation }) {
  return (
    <View className="flex-1  items-center ">
      <View
        className=" flex  w-full px-4 pb-3 rounded-b-3xl drop-shadow-xl bg-teal-100  flex-row pt-10 justify-between"
        style={{
          backgroundColor: "#97C6E9",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Doc_Home_Screeen")}
        />
        <Text className="text-xl text-white font-extrabold">Messages</Text>
        <Image
          source={require("../assets/Logo-Doc.png")}
          className="h-14  w-14 from-neutral-50 drop-shadow-xl rounded-lg "
        />
      </View>
      <View className=" flex  justify-between">
        <Chats />
      </View>

      <View className="absolute -bottom-0 self-center bg-white rounded-2xl h-14 p-3 w-full ">
        <View className="flex-row space-x-10  align-middle justify-center  items-center justify-items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Doc_Home_Screeen")}
          >
            <Feather name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="list" size={21} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <View className=" bg-orange-600 rounded-full h-12 w-12 flex justify-center items-center">
              <AntDesign name="pluscircleo" size={28} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="user" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Doc_Chat")}>
            <Ionicons name="chatbox-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
