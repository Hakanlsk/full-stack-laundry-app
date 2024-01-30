import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        setLoading(false);
      }
      if (authUser) {
        navigation.navigate("Home");
      }
    });

    return unsubcribe;
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential.user;
      console.log("user details", user);
    });
  };

  return (
    <SafeAreaView
      style={{
        marginTop: 25,
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
      }}
    >
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontWeight: 500, fontSize: 18, marginBottom: 10 }}>
            Loading...
          </Text>
          <ActivityIndicator size="large" color={"red"} />
        </View>
      ) : (
        <KeyboardAvoidingView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "600" }}>
              Sign In
            </Text>
            <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
              Sign In to your account
            </Text>
          </View>

          <View style={{ marginTop: 50 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                placeholderTextColor="black"
                style={{
                  fontSize: email ? 18 : 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  width: 200,
                  marginVertical: 10,
                }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="key-outline"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
              <TextInput
                value={password}
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                style={{
                  fontSize: password ? 18 : 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  width: 200,
                  marginVertical: 15,
                }}
              />
            </View>

            <TouchableOpacity
              onPress={login}
              style={{
                width: 200,
                backgroundColor: "#318CE7",
                padding: 12,
                borderRadius: 7,
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>

            <Pressable
              style={{ marginTop: 20 }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "500",
                  color: "gray",
                }}
              >
                Don't have a account? Sign Up
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
