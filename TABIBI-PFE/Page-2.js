import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <View
      className="flex-1 flex-col items-center   mt-4 "
      style={{
        backgroundColor: "#F6F6F6",
      }}
    >
      <View className=" mx-5  items-center  justify-center w-full rounded-br-full mb-14 ">
        <View className=" mt-10 self-start ml-5">
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <Text className="  font-extrabold text-3xl mt-10 ">Tabibi</Text>
      </View>
      <View className="flex-col  w-full mt-18">
        <View className="w-full flex-col   ">
          <Text className="w-fit col-start-1 mx-7 mt-3">Email Address</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"example@mail.com"}
          />
        </View>
        <View className="w-full flex-col   ">
          <Text className="w-fit col-start-1 mx-7 mt-4">Password</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"At least 8 characters"}
          />
        </View>
      </View>
      <View className=" mx-10 mt-52">
        <View className="flex-col">
          <Text className="text-gray-300 mx-15">
            Don’t have an Account?
            <Text className="text-slate-900">Sign Up</Text>
          </Text>
        </View>
        <TouchableOpacity className="mt-3 w-60 h-12 justify-center self-center shadow-lg bg-teal-400 rounded-lg">
          <Text className=" self-center text-white text-xl">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// style={styles.container}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E8EB",
  },
});
