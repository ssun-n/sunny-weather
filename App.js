import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';
import { LinearGradient } from 'expo-linear-gradient';

const API_KEY = "ecdea77387d27b03203aaadff09446d3";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  
  /* map api에서 */
  getWeather = async ( latitude, longitude ) => {
    const { 
      data: {
        main:{ temp },
        weather
      } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({ 
      isLoading: false, 
      condition: weather[0].main,
      temp
    });
  };

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords : { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather( latitude, longitude );

    } catch (error) {
      Alert.alert("Can't find you!", "So saaaad......");
    }
  };
  
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, condition, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}


