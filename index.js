import React, { Component } from 'react';
import { AppRegistry, View, Text, Button, ScrollView } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import App from './App';

const screen1 = () => {
   return(
       <View>
           <Text> Screen 1 </Text>
       </View>
   );
};

const screen2 = () => {
    return(
        <View>
            <Text> Screen 2 </Text>
        </View>
    );
};

const liveMapNavigatorOptions = (title) => ({navigation}) => ({
    title,
    headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: 'crimson',
        paddingLeft:15,
        paddingRight:15

    },
    headerTitleStyle: {
        color: '#fff',
        fontWeight:'normal',
        paddingLeft:0
    },

});

const NavigatorTimeline = StackNavigator({
    "screen1": { screen: screen1, navigationOptions:liveMapNavigatorOptions('Screen 1') },
    "screen2": { screen: screen2,  navigationOptions:liveMapNavigatorOptions('Screen 2') },
},{initialRoute: "screen1"});



class  settings extends Component{
    render(){
        return(
            <View>
                <Button onPress={() => {this.props.navigation.navigate('screen2')} } title="Go to Screen 2"/>
            </View>
        );
    }
};


export const drawerOptions = () => ({
    contentOptions:{
        labelStyle:{
            fontSize:16
        },
        activeTintColor: '#257ce9',
        style: {
            flex:1,
            paddingTop:10
        }
    },
    contentComponent: (props,{ navigation }) =>{
        return (
            <ScrollView>
                <DrawerItems navigation={navigation} {...props} />
            </ScrollView>
        )},

});

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor) => ({
    title,
    headerStyle: {
        backgroundColor,
    },
    headerTitleStyle: {
        color: titleColor,
    },
    headerTintColor: titleColor,
    drawerLabel: title,
});

const timeLineDrawerOptions = getDrawerNavigationOptions('Timeline','blue', 'white');

const settingsDrawerOptions = getDrawerNavigationOptions('Ayarlar', 'blue', 'white');

const routeConfiguration = {
    'TimelineNavigator': { screen: NavigatorTimeline, navigationOptions: timeLineDrawerOptions },
    'Settings': { screen: settings, navigationOptions: settingsDrawerOptions },
};

export const NavigatorAuthenticated = DrawerNavigator(routeConfiguration, drawerOptions());


AppRegistry.registerComponent('drawer', () =>App);
