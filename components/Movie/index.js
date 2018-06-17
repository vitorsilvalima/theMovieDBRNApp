import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';
import MovieFooter  from './MovieFooter';

export default class Movie extends PureComponent {
  render() {
    const { movie, onPress } = this.props;
    const {
      poster_path,
      id,
      vote_average,
      release_date,
    } = movie;

    return (
      <View style={styles.movie}>
        <TouchableOpacity onPress={() => onPress(id)}>
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
            }}
            style={styles.poster}
          >
            <MovieFooter
              voteAverate={vote_average}
              releaseYear={release_date.substring(0,4)}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }
}

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired
  }),
  onPress: PropTypes.func,
};

Movie.defaultProps = {
  onPress: () => null,
}

const styles = StyleSheet.create({
  movie: {
    width: 250,
    height: 325,
    display: 'flex',
  },
  poster: {
    width: 250,
    height: 325,
  },
});