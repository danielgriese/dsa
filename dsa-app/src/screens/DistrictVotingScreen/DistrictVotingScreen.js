import React from 'react';
import { Text, View } from 'react-native';

import { Link } from 'react-router-native';

export default class DistrictVotingScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>DistrictVotingScreen</Text>
        <Link to="/">
          <Text>Back to Home</Text>
        </Link>
      </View>
    );
  }
}
