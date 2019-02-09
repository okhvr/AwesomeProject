import { AsyncStorage } from 'react-native';
import axios from 'axios';

const apikey = '2f3933e4';
const endpoint = `http://10.17.163.251:3000/`; //http://www.omdbapi.com/?apikey=2f3933e4&s=*apple* -- doesn`t work :(
const fakeTimeout = 500;

// const fetchMovies = async () => {
//     console.log('works!');
//     return await axios(endpoint).catch(e => console.error(e));
// } 
const fetchMovies = async () => {
    try {
      const storedResult = await AsyncStorage.getItem(endpoint);
  
      if (storedResult !== null) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(JSON.parse(storedResult).Search);
          }, fakeTimeout);
        });
      }
    } catch (error) {
      console.error('failed to retrieve stored data', error);
    }
    const response = await axios(endpoint);
    try {
      await AsyncStorage.setItem(endpoint, JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
    return response.data.Search;
  };
  

export default fetchMovies;