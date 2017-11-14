import { combineReducers } from 'redux';

import { NavigatorAuthenticated } from '../sections/__App/navigators/AuthenticatedNavigation';
import { NavigatorTimeline } from '../sections/Timeline/navigators/TimelineNavigation';

import {
    STATE_APP_AUTHENTICATEDNAVIGATION,
} from '../sections/__App/constants';

import { STATE_TIMELINE_NAVIGATION } from '../sections/Timeline/constant';

export default combineReducers({
    [STATE_APP_AUTHENTICATEDNAVIGATION]: (state, action) => NavigatorAuthenticated.router.getStateForAction(action, state),
    [STATE_TIMELINE_NAVIGATION]: (state, action) => NavigatorTimeline.router.getStateForAction(action, state),
});
