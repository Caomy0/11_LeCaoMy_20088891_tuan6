import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
// import screen1 from "./screen1";
// import screen2 from "./screen2";
// import Screen2 from "./Source/Screen2";
// import screen1 from "./Source/screen1";

function screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          source={require("/blue.png")}
          style={{ width: 301, height: 350, margin: 20, left: 30 }}
        ></Image>{" "}
        <Text style={{ fontSize: 15, fontWeight: 400, left: 50 }}>
          {" "}
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng{" "}
        </Text>{" "}
      </View>{" "}
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("/star.png")}
          style={{ width: 30, height: 30, left: 30, top: 10 }}
        />{" "}
        <Image
          source={require("/star.png")}
          style={{ width: 30, height: 30, left: 30, top: 10 }}
        />{" "}
        <Image
          source={require("/star.png")}
          style={{ width: 30, height: 30, left: 30, top: 10 }}
        />{" "}
        <Image
          source={require("/star.png")}
          style={{ width: 30, height: 30, left: 30, top: 10 }}
        />{" "}
        <Image
          source={require("/star.png")}
          style={{ width: 30, height: 30, left: 30, top: 10 }}
        />{" "}
        <Text style={{ left: 40, top: 10, fontSize: 18, fontWeight: 400 }}>
          {" "}
          (Xem 828 đánh giá){" "}
        </Text>{" "}
      </View>{" "}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", top: 20, left: 30 }}>
          {" "}
          1.790 .000 đ{" "}
        </Text>{" "}
        <Text
          style={{
            textDecorationLine: "line-through",
            top: 22,
            left: 60,
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          1.790 .000 đ{" "}
        </Text>{" "}
      </View>{" "}
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{ color: "#FA0000", fontWeight: "bold", top: 40, left: 40 }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN{" "}
        </Text>{" "}
        <Image
          source={require("/dauhoi.png")}
          style={{ width: 20, height: 20, top: 37, left: 35 }}
        />{" "}
      </View>{" "}
      <View
        style={{
          top: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          style={{
            borderRadius: 10,
            backgroundColor: "#faf5fa",
            width: 350,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("Screen2")}
        >
          hoàn tiền
          <Image
            source={require("/Vector.png")}
            style={{ width: 15, height: 15, left: 70 }}
          />{" "}
        </Pressable>{" "}
      </View>{" "}
      <View
        style={{
          backgroundColor: "#CA1536",
          width: 350,
          height: 50,
          top: 80,
          left: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#F9F2F2",
          }}
        >
          {" "}
          CHỌN MUA{" "}
        </Text>{" "}
      </View>{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function Screen2({ navigation }) {
  const [image, setImage] = useState(require("/blue.png"));
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 3, justifyContent: "center", flexDirection: "row" }}>
        <Image
          source={image}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <Text style={{ marginTop: 20, fontWeight: "bold" }}>
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>{" "}
      <View
        style={{
          flex: 7,
          backgroundColor: "lightgrey",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 700, right: 70 }}>
          Chọn một màu bên dưới:
        </Text>
        <Pressable
          style={{
            margin: 5,
            width: 70,
            height: 70,
            backgroundColor: "red",
          }}
          onPress={() => navigation.navigate("Screen3")}
        ></Pressable>
        <Pressable
          style={{ margin: 3, width: 70, height: 70, backgroundColor: "black" }}
          onPress={() => {
            setImage(require("/black.png"));
          }}
        ></Pressable>
        <Pressable
          style={{
            margin: 5,
            width: 70,
            height: 70,
            backgroundColor: "silver",
          }}
          onPress={() => {
            setImage(require("/silver.png"));
          }}
        ></Pressable>
        <Pressable
          style={{ margin: 5, width: 70, height: 70, backgroundColor: "blue" }}
          onPress={() => {
            setImage(require("/blue.png"));
          }}
        ></Pressable>
        <Pressable
          style={{
            marginTop: 20,
            width: 300,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#1952E2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#F9F2F2",
            }}
          >
            XONG
          </Text>
        </Pressable>
      </View>{" "}
    </SafeAreaView>
  );
}

function Screen3({}) {
  const [image, setImage] = useState(require("/red.png"));
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 3, justifyContent: "center", flexDirection: "row" }}>
        <View>
          <Image
            source={image}
            style={{ width: 130, height: 200 }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={{ marginTop: 20, fontWeight: "bold", marginLeft: 20 }}>
            Điện Thoại Vsmart Joy 3 Hàng
          </Text>
          <Text style={{ marginTop: 5, fontWeight: "bold", marginLeft: 20 }}>
            Hàng chính hãng
          </Text>
          <Text style={{ marginTop: 10, fontWeight: "bold", marginLeft: 20 }}>
            Màu: đỏ
          </Text>
          <Text style={{ marginTop: 10, fontWeight: "bold", marginLeft: 20 }}>
            Cung cấp bởi Tiki Tradding
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              marginLeft: 20,
              fontSize: 20,
            }}
          >
            1.790.000 đ
          </Text>
        </View>
      </View>{" "}
      <View
        style={{
          flex: 7,
          backgroundColor: "lightgrey",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 700, right: 70 }}>
          Chọn một màu bên dưới:
        </Text>
        <Pressable
          style={{
            margin: 5,
            width: 70,
            height: 70,
            backgroundColor: "red",
          }}
          onPress={() => {
            setImage(require("/red.png"));
          }}
        ></Pressable>
        <Pressable
          style={{ margin: 3, width: 70, height: 70, backgroundColor: "black" }}
        ></Pressable>
        <Pressable
          style={{
            margin: 5,
            width: 70,
            height: 70,
            backgroundColor: "silver",
          }}
        ></Pressable>
        <Pressable
          style={{ margin: 5, width: 70, height: 70, backgroundColor: "blue" }}
        ></Pressable>
        <Pressable
          style={{
            marginTop: 20,
            width: 300,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#1952E2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#F9F2F2",
            }}
          >
            XONG
          </Text>
        </Pressable>
      </View>{" "}
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screen1" component={screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
