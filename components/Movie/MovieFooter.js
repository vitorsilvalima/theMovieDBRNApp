import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const MovieFooter = ({ voteAverate, releaseYear }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerItem}>
        <Ionicons name="md-star" size={32} color="#59A6CF" style={styles.icon} />
        <Text style={styles.text}>{voteAverate}</Text>
      </View>
      <View style={styles.footerItem}>
        <Ionicons name="md-calendar" size={32} color="#59A6CF" style={styles.icon} />
        <Text style={styles.text}>{releaseYear}</Text>
      </View>
    </View>
  )
}

MovieFooter.propTypes = {
  voteAverate: PropTypes.number.isRequired,
  releaseYear: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: 292,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 10,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 10,
  },
  text: {
    color: '#59A6CF',
  }
})

export default MovieFooter;