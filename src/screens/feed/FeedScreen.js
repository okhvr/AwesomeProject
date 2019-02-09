import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import MoviesList from './../../components/moviesList/MoviesList';
import sharedStyle from '../../shared/style';
import style from './style';
import {fetchMovies} from './../../api';

export default class FeedScreen extends React.Component {
  state = {
    loading: false,
    data: null,
  };

  onButtonPress = () => {
    this.setState({loading: true});
    
    fetchMovies()
      .then((movies) => {
        console.log(movies);
        this.setState({loading: false, data: movies})
      })
      .catch((er) => {
        console.error(er, 'from feed');
        this.setState({loading: false})
      });
  }

  render() {
    const {loading, data} = this.state;
    return (
      <SafeAreaView style={[sharedStyle.container, { borderColor: 'blue', borderWidth: 1, flex: 1 }]}>
        {!data && !loading && (
          <TouchableOpacity
            onPress={this.onButtonPress}
            style={style.button}
          >
            <Text style={style.buttonLabel}>Find Stuff</Text>
          </TouchableOpacity>
        )}
        <MoviesList loading={loading} data={data} />
      </SafeAreaView>
    );
  }
}