import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Login/Login";
import { DefaultTheme, PaperProvider } from "react-native-paper";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#FC9A63",
      background: '#E5E5E5'
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Login />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
