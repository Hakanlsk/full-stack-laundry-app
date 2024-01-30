import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";

const DressItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  //dispatch ile redux actionlarına erişiriz, addToCart actionı ile arraya item eklenir
  const addItemToCart = () => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#F8F8F8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginBottom: 7,
              width: 80,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 15, color: "gray" }}>${item.price}</Text>
        </View>

        {/* eğer item sepete eklenmiş ise add butonu yerine "- adet +"" gösterilir */}
        {cart.some((c) => c.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                dispatch(decrementQuantity(item)); // cart
                dispatch(decrementQty(item)); // product
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088F8F",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                -
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 19,
                  color: "#088F8F",
                  paddingHorizontal: 8,
                  fontWeight: "600",
                }}
              >
                {item.quantity}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(incrementQuantity(item)); // cart
                dispatch(incrementQty(item)); //product
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088F8F",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </Pressable>
        ) : (
          <TouchableOpacity
            onPress={addItemToCart}
            style={{
              width: 65,
              backgroundColor: "#90EE90",
              borderRadius: 7,
              borderWidth: 0.8,
              borderColor: "#088f8f",
              paddingVertical: 7,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#29294d",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
        )}
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
