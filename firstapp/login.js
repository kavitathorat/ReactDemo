import React, { Component } from 'react';
import TabView  from './TabView';
import {StackNavigator} from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailtext: "",
      passwordtext: "",
    }

}
  onloginPressButton = () => {
    if (this.state.emailtext.length <= 0 || this.state.passwordtext.length <= 0){
      alert('Please enter email and password')
    
    }
    else {
      this.props.navigation.navigate('TabView')
    }

  }
  onSignUpPressButton() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome</Text>
        <View style={styles.inputViewBg} >
          <View style={styles.inputView} >
            <Text style={styles.credText}>Email:  </Text>
            <TextInput placeholder='Enter Email' placeholderTextColor='gray'
              style={styles.inputText}
              onChangeText={text => this.setState({ emailtext: text })} />
          </View>
          <View style={styles.inputView} >
            <Text style={styles.credText}>Password:  </Text>
            <TextInput
              placeholder='Enter Password' placeholderTextColor='gray' secureTextEntry
              style={styles.inputText}
              onChangeText={text => this.setState({ passwordtext: text })} />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <View alignItems='center'>
          <TouchableOpacity style={styles.loginBtn} onPress={this.onloginPressButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={this.onSignUpPressButton}>
            <Text style={styles.loginText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    fontWeight: "bold",
    fontSize: 50,
    color: "black",
    textAlign: 'center',
    marginBottom: 40
  },
  inputViewBg: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  inputView: {
    marginTop: 10,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  inputText: {
    color: "white",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    width: '70%',
    height: 50,
    paddingLeft: 10,
  },
  forgot: {
    color: "black",
    fontSize: 11,
    textAlign: 'center',
    padding: 20
  },
  loginBtn: {
    backgroundColor: "gray",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: '60%'
  },
  loginText: {
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  credText: { fontSize: 16, fontWeight: 'bold', color: 'white', width: '30%' }
});
