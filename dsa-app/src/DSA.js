import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeRouter, Route, AndroidBackButton } from 'react-router-native';

import HomeScreen from './screens/HomeScreen';
import DistrictVotingScreen from './screens/DistrictVotingScreen';
import RankingScreen from './screens/RankingScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class DSA extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>

          <AndroidBackButton />

          <Route exact path="/" component={HomeScreen} />

          <Route path="/vote/district" component={DistrictVotingScreen} />

          <Route path="/ranking" component={RankingScreen} />

        </View>
      </NativeRouter>
    );
  }
}
