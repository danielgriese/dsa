import React from 'react';
import { Text, View } from 'react-native';

import { Link } from 'react-router-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>

        <Link to="/vote/district">
          <Text>Go to Voting</Text>
        </Link>

        <Link to="/ranking">
          <Text>Go to Ranking</Text>
        </Link>

      </View>
    );
  }
}
