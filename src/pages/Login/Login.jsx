import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Login = () => {
  const [credenciais, setCredenciais] = useState({
    email: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/imgs/logo.png")}
      />

      <View>
        <TextInput
          mode="outlined"
          style={styles.marginBottom}
          label="E-mail"
          value={credenciais.email}
          onChangeText={(text) =>
            setCredenciais({ ...credenciais, email: text })
          }
        />

        <TextInput
          mode="outlined"
          style={styles.marginBottom}
          label="Senha"
          secureTextEntry
          value={credenciais.password}
          right={<TextInput.Icon icon="eye" />}
          onChangeText={(text) =>
            setCredenciais({ ...credenciais, password: text })
          }
        />
        <Button
          mode="contained"
          style={styles.marginBottom}
          onPress={() => console.log("Pressed")}
        >
          Entrar
        </Button>

        <Button
          style={styles.marginBottom}
          onPress={() => console.log("Pressed")}
          theme={{ colors: { primary: "#FC9A63" } }}
        >
          Recuperar senha
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    display: "flex",
    alignSelf: "center",
    marginBottom: 70,
    width: 240,
    height: 50
  },

  marginBottom: {
    marginBottom: 20,
    borderRadius: 8
  },
});

export default Login;
