import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import MovieThumb from './../movieThumb/MovieThumb';

import style from './style';

export default class MoviesList extends Component {

  renderMovieThumbNail = (item, index) => (
    <MovieThumb key={index} {...item} />
  );

  render() {
    const { data, loading } = this.props;
    if (loading) return <ActivityIndicator size="large" color="blue" />
    if (!data || !data.length) return null;
    return (
      <View style={style.container}>
        <ScrollView>
          {data.map(this.renderMovieThumbNail)}
        </ScrollView>
      </View>
    );
  }
}