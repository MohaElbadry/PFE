import { Image, Text, View, TouchableOpacity } from "react-native";

export default function Home({navigation}) {
  return (
    <View
      className="flex-1 flex-col items-center  justify-center mt-4 "
      style={{
        backgroundColor: "#F6F6F6",
      }}
    >
      <View
        className=" mx-5 basis-2/3 items-center  justify-center w-full rounded-br-full shadow-md "
        style={{
          backgroundColor: "#ECF2F3",
          borderBottomLeftRadius: 150,
          borderBottomRightRadius: 150,
        }}
      >
        <Text className="  font-extrabold text-3xl mt-24 ">Tabibi</Text>
        <Image
          source={require("../assets/Logo-Doc.png")}
          className="h-2/3  w-80 from-neutral-50 drop-shadow-xl rounded-b-full"
        />
      </View>
      <View className="basis-1/3 flex-col items-center  w-full ">
        <Text className=" mt-7  font-bold">
          Votre meilleur assistant médical
        </Text>
        <Text className="px-9 text-xs mt-5 ">
          Dapatkan layanan medis spesial untuk kamu 24 jam.{" "}
        </Text>
        <TouchableOpacity
          className="absolute bottom-10 w-60 h-12 justify-center self-center mt-8 shadow-lg bg-cyan-600 rounded-lg"
          onPress={() => navigation.navigate("Page_2")}
        >
          <Text className=" self-center text-white text-xl font-bold">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
