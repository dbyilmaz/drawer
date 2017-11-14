import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { STATE_TIMELINE_NAVIGATION } from '../constant';
import { LiveMap, Timeline } from '../index';
import { liveMapNavigatorOptions } from './NavigationOptions';

export const NavigatorTimeline = StackNavigator({
    "RouteTimeline": { screen: Timeline, navigationOptions:liveMapNavigatorOptions('TimeLine') },
    "RouteLiveMap": { screen: LiveMap,  navigationOptions:liveMapNavigatorOptions('Live Map') },
},{initialRoute: "RouteTimeline"});

const mapStateToProps = state => (
    {
        navigationState: state[STATE_TIMELINE_NAVIGATION],
    }
);

class TimelineNavigation extends Component {
    render() {
        const { navigationState, dispatch } = this.props;
        return (
            <NavigatorTimeline
                navigation={
                    addNavigationHelpers({
                        dispatch,
                        state: navigationState,
                    })
                }
            />
        );
    }
}

export default connect(mapStateToProps)(TimelineNavigation);
