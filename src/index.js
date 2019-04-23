/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Carousel from './components/Carrossel'
import metrics, { scale } from './theme/metrics'
import Button from './components/Button';
import colors from './theme/colors';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
        <Carousel indicatorColor="red">
        <Carousel.Page>
          <View style={styles.container}>
            <Text style={styles.title}> Buttons </Text>
            <Button />
            <Button
              half
            />
            <Button
              title="Custom"
              style={{backgroundColor: 'white'}} 
              titleStyle={{color: 'black'}}
              indicatorColor="#000"
              indicatorSize="large"
            />
            <Button
              style={{backgroundColor: 'orange'}} 
              indicatorColor="blue"
              indicatorSize="large"
              hideBorder
            >
              <Text style={{textAlign:'center'}}>
                Now I have a custom children!
              </Text>
            </Button>
            <Button
              style={{backgroundColor: 'orange'}} 
              indicatorColor="blue"
              indicatorSize="large"
              hideBorder
              half
            >
              <Text style={{textAlign:'center'}}>
                Now I have a custom children!
              </Text>
            </Button>
          </View>
        </Carousel.Page>


        <Carousel.Page>
          <View style={styles.container}>
            <Text>
              Page 2
            </Text>
          </View>
        </Carousel.Page>


        </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  content: {
    height: metrics.screen.height * 0.7
  },

  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'flex-start',
  }
});
