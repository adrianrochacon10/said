import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verifica si los campos de nombre de usuario y contraseña no están vacíos
    if (!username || !password) {
      Alert.alert('Error', 'Por favor ingresa tu nombre de usuario y contraseña');
      return;
    }

    // Simulando la lógica de autenticación
    if (username === 'user' && password === '123') {
      Alert.alert('Éxito', 'Inicio de sesión exitoso');
    } else {
      Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
    }

    navigation.navigate("HomeScreen")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.please}>Porfavor ingresa para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>¿No tienes cuenta? Registrate Aqui</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 60,
    right: 70,
    marginBottom: 80,
    position: 'relative',
    backgroundColor: '#00A3FF',
    width: 300,
    borderRadius: 30,
    paddingLeft: 70
  },
  please: {
    fontSize: 20,
    right: 70,
    marginBottom: 80,
    position: 'relative',
    borderRadius: 30,
    paddingLeft: 70,
    fontWeight: '900'
  },
  input: {
    width: '70%',
    height: 50,
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 2,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#00A3FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 60,
    left: 80
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    top:40,
    fontSize: 16,
    fontWeight: '800'
  }
});

export default LoginScreen;
