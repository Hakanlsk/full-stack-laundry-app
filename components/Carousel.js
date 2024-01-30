import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
    "https://media.istockphoto.com/id/1714495252/tr/vekt%C3%B6r/people-working-in-dry-cleaning-laundry.jpg?s=2048x2048&w=is&k=20&c=6Fvpvc02Khan8EOyjyB6-hccs-cHqiSBNe1-Wzzuf1I=",
    "https://img.freepik.com/premium-psd/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-home_554821-2053.jpg?w=1380",
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
