import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 12,
    shadowOpacity: 1,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100
  }
});
export const CardRN = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: '/iphone 14.jpg' }} resizeMode='contain' />
      <Text style={styles.text}>iPhone 14 Pro</Text>
      <Text style={styles.text}>128 gb</Text>
    </View>
  );
};

export default CardRN;
