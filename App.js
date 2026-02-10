import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 24 }}>LifeDrop 🩸</Text>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
        />
        <Button title="Login" onPress={() => setLoggedIn(true)} />
      </View>
    );
  }

  return (
    <View style={{ padding: 30 }}>
      <Text>Welcome {email}</Text>
      <Text>Blood Group: O+</Text>
      <Button title="Request Blood" />
    </View>
  );
}
