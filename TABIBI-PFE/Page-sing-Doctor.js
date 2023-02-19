import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      className="flex-1  items-center   mt-4 "
      style={{
        backgroundColor: "#F6F6F6",
      }}
    >
      <View className=" mr-72 mt-8 ">
        <AntDesign name="arrowleft" size={24} color="black" />
      </View>

      <View className="w-full mx-7 mt-7 mr-10">
        <View className="flex-row   mx-7">
          <View className=" flex-col  ">
            <Text className="w-fit col-start-1  mt-4">Full name</Text>
            <TextInput
              className="w-36 h-10 bg-white  rounded-md  shadow-sm border-1 p-2 border-gray-400 "
              placeholder={"First Name"}
            />
          </View>

          <View className=" flex-col  ">
            <Text className="w-fit col-start-1  mt-4">{""}</Text>
            <TextInput
              className="w-36 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
              placeholder={"Second Name"}
            />
          </View>
        </View>

        <View className="w-full flex-col  ">
          <Text className="w-fit col-start-1 mx-7 mt-4">CIN</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"CIN"}
          />
        </View>
        <View className="w-full flex-col  ">
          <Text className="w-fit col-start-1 mx-7 mt-4">Phone</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"Phone"}
          />
        </View>
        <View className="w-full flex-col  ">
          <Text className="w-fit col-start-1 mx-7 mt-4">Address</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"address"}
          />
        </View>
        <View className="w-full flex-col  ">
          <Text className="w-fit col-start-1 mx-7 mt-4">Specialite</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"example@mail.com"}
          />
        </View>


        <View className="w-full flex-col  ">
          <Text className="w-fit col-start-1 mx-7 mt-4">Password</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"At least 8 characters"}
          />
        </View>


        <View className=" w-full items-center mt-4 ">
          <View className="flex-col ">
            <Text className="text-gray-500 mx-15">
              Don’t have an Account?
              <Text className="text-slate-900">Sign Up</Text>
            </Text>
          </View>
          <TouchableOpacity className="mt-3 w-60 h-10 justify-center self-center shadow-lg bg-teal-400 rounded-lg">
            <Text className=" self-center text-white text-xl">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
