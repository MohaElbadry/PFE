import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Doc_Ajout_Traitement({ navigation }) {
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
        <Text className="text-xl text-[#1C6BA4]  font-extrabold">{"jj "}</Text>
      </View>

      <View className="mt-16 w-full pl-5">
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
                Fav Urgence :
              </Text>
              <Text className="font-light text-gray-500 text-sm">
                {" "}
                Texttttt
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-col  w-full mt-20">
        <View className="w-full flex-col   ">
          <Text className="w-fit col-start-1 mx-7 mt-3">Type de Traitement</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"-----"}
          />
        </View>
        <View className="w-full flex-col   ">
          <Text className="w-fit col-start-1 mx-7 mt-4">Type d'Urgence</Text>
          <TextInput
            className="w-80 h-10 bg-white mx-7 rounded-md  shadow-sm border-1 p-2 border-gray-400 "
            placeholder={"At least 8 characters"}
          />
        </View>
      </View>
      <View className=" mt-14 w-full  items-center">
        <TouchableOpacity className="w-2/3 h-16 bg-[#EEA63A] rounded-xl justify-center items-center">
          <Text className="text-sm text-white font-semibold">
            Ajouter Traitement
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
