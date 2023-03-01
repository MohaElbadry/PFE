import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const data = [
  {
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },{
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },
  {
    id: "1253",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello there!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },
  {
    id: "1234",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello there!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
  },
];
export default function Chats() {
  // useEffect(() => {
  //   console.log(data);
  // }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatContainer}>
            <Image
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                borderRadius: 50,
              }}
              source={{ uri: item.image }}
            />

            <View style={styles.chatTextContainer}>
              <View style={styles.chatTextTop}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <View style={styles.chatTextBottom}>
                <Text style={styles.msg}>{item.msg}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  chatTextContainer: {
    marginLeft: 10,
    marginTop: 5,
  },
  chatTextTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: WIDTH * 0.8,
  },
  chatTextBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // width: 200,
    width: WIDTH * 0.8,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  time: {
    fontSize: 13,
  },
  msg: {
    fontSize: 15,
    marginLeft: 5,
  },
});
