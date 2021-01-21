import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button, TouchableOpacity, ColorPropType,
} from 'react-native';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
        <View style={{ height: '100%', backgroundColor: 'lightgray' }}>
          <View style={{ flexDirection: 'row', height: '50%', paddingTop: 100 }}>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>Profile</Text>
              </View>

            </View>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>{"My\nAccount"}</Text>
              </View>

            </View>

          </View>

          <View style={{ flexDirection: 'row', height: '50%', paddingBottom: 100 }}>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>{"My\nOrders"}</Text>
              </View>

            </View>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>{"My Cart"}</Text>
              </View>

            </View>

          </View>
        </View>
     // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  halfContainer: {

  },
  circleContainer:
  {
    width: '50%', justifyContent: 'center',
    alignItems: 'center', alignContent: 'center'
  },

  circle:
  {
    width: 180, height: 180, borderWidth: 1, borderRadius: 20,
    borderColor: 'black', backgroundColor: 'yellow',
    justifyContent : 'center'
  },
  
  circleText : {
    color: "black",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },

});