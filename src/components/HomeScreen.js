import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styles } from "./HomeScreenCss";
import { increaseAmount, increase, decrease } from "../Redux/Action";

export default function HomeScreen() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.DataSlices.value);
  const handleIncrement = () => {
    increaseAmount(Number(amount));
    setAmount(0);
  };
  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={increase} />
      <Text style={{ fontSize: 25, marginVertical: 10 }}>
        Data is : {count}
      </Text>
      <Button title="Decrease" onPress={decrease} />
      <View style={styles.btnContainer}>
        <Button title="Increment by Amount" onPress={handleIncrement} />
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
        />
      </View>
    </View>
  );
}
