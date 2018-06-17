import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';


export default class MovieDetail extends PureComponent {
  state = {
    movie: null,
  }

  componentWillMount(){
    const { id: movieId } = this.props;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b573d051ec65413c949e68169923f7ff`)
      .then(response => response.json())
      .then(movie => console.log(movie))
  }
  render() {
    const { id } = this.props;

    return (
      <View style={styles.movie}>
        {/* <Image /> */}
      </View>
    )
  }
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  onDimiss: PropTypes.func,
};

MovieDetail.defaultProps = {
  onDimiss: () => null,
}

const styles = StyleSheet.create({
  movie: {
    flex:1,
    backgroundColor: 'yellow',
  },
});