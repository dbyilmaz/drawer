import React from 'react';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { STATE_APP_AUTHENTICATEDNAVIGATION } from '../constants';
import TimelineNavigation from '../../Timeline/navigators/TimelineNavigation';
import { drawerOptions, timeLineDrawerOptions, settingsDrawerOptions } from '../../Timeline/navigators/NavigationOptions';
import Settings from '../Container/Settings';

const routeConfiguration = {
   "RouteTimelineNavigator": { screen: TimelineNavigation, navigationOptions: timeLineDrawerOptions },
   "Settings": { screen: Settings, navigationOptions: settingsDrawerOptions },

};

export const NavigatorAuthenticated = DrawerNavigator(routeConfiguration, drawerOptions());

const mapStateToProps = state => (
    {
        navigationState: state[STATE_APP_AUTHENTICATEDNAVIGATION],
    }
);

class AuthenticatedNavigation extends React.Component {
    render() {
        const { navigationState, dispatch } = this.props;
        return (
            <NavigatorAuthenticated
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

export default connect(mapStateToProps)(AuthenticatedNavigation);
