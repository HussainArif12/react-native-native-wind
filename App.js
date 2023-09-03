import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text className="px-8 text-lg text-rose-800">
        This style is being applied with NativeWind
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
