import React from 'react';
import { Text, View } from 'react-native';

import { Link } from 'react-router-native';

export default class RankingScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>RankingScreen</Text>
        <Link to="/">
          <Text>Back to Home</Text>
        </Link>
      </View>
    );
  }
}
