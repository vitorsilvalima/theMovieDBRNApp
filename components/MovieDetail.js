import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';


export default class MovieDetail extends PureComponent {
  render() {
    const { id } = this.props;

    return (
      <View style={styles.movie}>
        
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