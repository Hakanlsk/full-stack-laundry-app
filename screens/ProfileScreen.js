import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const user = auth.currentUser;
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{
        marginTop: 25,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 150, height: 150, borderRadius: 20, marginTop: 50 }}
        source={{
          uri: "https://avatars.githubusercontent.com/u/123507532?v=4",
        }}
      />
      <TouchableOpacity style={{ marginVertical: 10, marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500" }}>
          Welcome {user.email}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={signOutUser}
        style={{
          borderWidth: 0.8,
          borderColor: "red",
          backgroundColor: "red",
          width: 100,
          borderRadius: 20,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
