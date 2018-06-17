import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';


export default class Movie extends PureComponent {
  render() {
    const { movie, onPress } = this.props;
    const {
      poster_path,
      id
    } = movie;

    return (
      <View style={styles.movie}>
        <TouchableOpacity onPress={() => onPress(id)}>
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
            }}
            style={styles.movie}
          >
            <Text>Windows</Text>
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
    width: 150,
    height: 200,
    padding: 4,
  },
});