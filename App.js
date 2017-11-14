import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import AppNavigation from './src/sections/__App/navigators/AuthenticatedNavigation';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <AppNavigation />
            </Provider>
        );
    }
}
