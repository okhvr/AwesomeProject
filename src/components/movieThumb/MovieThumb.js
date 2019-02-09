import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import style from './style';

// type Props = {
//   Poster: string;
//   Title: string;
//   Type: string;
//   Year: string;
//   imdbID: string;
// };
// type State = {};

export default class MovieThumb extends Component {
  render() {
    const { Title, Poster } = this.props;
    return (
      <View style={style.container}>
        <Image
          style={style.image}
          source={{ uri: Poster }}
          resizeMode="contain"
        />
        <Text>{Title}</Text>
      </View>
    );
  }
}