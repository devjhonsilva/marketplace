import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Nova tela.</Text>
      <TouchableOpacity onPress={() => router.push("login")}>
        <Text className="font-bold text-xl text-success ">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
