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

const WIDTH = Dimensions.get("window").width - 30;

const data = [
  {
    id: "123",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
    about:
      "Ex- Professor & Head of Department Department of Neurosurgery Dhaka Medical College & Hospital Ex- Professor & Head of Department Department of Neurosurgery Dhaka Medical College & Hospital",
  },
  {
    id: "1234",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
    about:
      "Ex- Professor & Head of Department Department of Neurosurgery Dhaka Medical College & Hospital Ex- Professor & Head of Department Department of Neurosurgery Dhaka Medical College & Hospital",
  },
  {
    id: "1235",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
    about:
      "Ex- Professor & Head of Department Department of Neurosurgery Dhaka Medical College & Hospital Ex- Professor & Head of Department Department of Neurosurgery Dhaka Medical College & Hospital",
  },
  {
    id: "12356",
    title: "My Own",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    msg: "Hello thh!",
    time: "07:30",
    date: new Date().toLocaleDateString(),
    about:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export default function List_Doc({ navigation }) {
  console.log(data);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatContainer}
            onPress={() => navigation.navigate("Pat_Med_Profile")}
          >
            <Image
              style={{
                width: 64,
                height: 64,
                resizeMode: "contain",
                borderRadius: 15,
              }}
              source={{ uri: item.image }}
            />

            <View style={styles.chatTextContainer}>
              <View style={styles.chatTextTop}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.chatTextBottom}>
                <Text style={styles.msg}>Cardiologist in apolo hospital</Text>
                <Text style={styles.msg}>About</Text>
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
    marginHorizontal: 20,
    marginVertical: 14,
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
    justifyContent: "space-between",
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
    marginLeft: 5,
    fontSize: 13,
    color: "darkgray",
  },
});
