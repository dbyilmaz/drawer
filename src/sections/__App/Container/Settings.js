import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
const TimelineRoute = "RouteTimeline";
const LiveMapRoute = "RouteLiveMap";
const TimelineNavigator = "RouteTimelineNavigator";

class Settings extends Component {
  navigateScreen (navigation) {
      navigation.navigate(LiveMapRoute);
  }
    render(){
        return(
            <View>
                <Text>Settings</Text>
                <Button onPress={() => this.navigateScreen(this.props.navigation)} title="Go to Livemap" />
            </View>
        );
    }
}


export default Settings;
