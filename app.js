import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';

// Signup Screen
const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const validateForm = () => {
    if (username.match(/[^a-zA-Z]/)) {
      alert('Username should contain alphabets only');
      return false;
    }
    if (password.length < 6) {
      alert('Password should be at least 6 characters long');
      return false;
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email');
      return false;
    }
    if (!phone.match(/^\+92-3\d{2}-\d{7}$/)) {
      alert('Phone number should match +92-3xx-xxxxxxx');
      return false;
    }
    return true;
  };

  const handleSignup = () => {
    if (validateForm()) {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number (+92-3xx-xxxxxxx)"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

// Login Screen
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Profile');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

// Profile Screen
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to your Profile!</Text>
    </View>
  );
};

// Navigation setup
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles for the screens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default App;
