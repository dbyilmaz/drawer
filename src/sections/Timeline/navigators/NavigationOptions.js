import React from 'react';
import {  ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerItems } from 'react-navigation';

getPrimaryColor = () => {return 'crimson'};

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
        console.log('test',(props));
        return (
            <ScrollView>
                <DrawerItems navigation={navigation} {...props} />
            </ScrollView>
        )},

});
export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
    title,
    headerStyle: {
        backgroundColor,
    },
    headerTitleStyle: {
        color: titleColor,
    },
    headerTintColor: titleColor,
    drawerLabel: title,
    drawerIcon,
});

const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={25} color={tintColor} />;

const liveMapDrawerIcon = ({ tintColor }) => getDrawerIcon('person-pin', tintColor);
const timeLineDrawerIcon = ({ tintColor }) => getDrawerIcon('timeline', tintColor);

export const liveMapDrawerOptions = getDrawerNavigationOptions('Güncel Konumlar', getPrimaryColor(), 'white', liveMapDrawerIcon);
export const timeLineDrawerOptions = getDrawerNavigationOptions('Timeline', getPrimaryColor(), 'white', timeLineDrawerIcon);

export const settingsDrawerOptions = getDrawerNavigationOptions('Ayarlar', getPrimaryColor(), 'white', liveMapDrawerIcon);


export const liveMapNavigatorOptions = (title) => ({navigation}) => ({
    title,
    headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: getPrimaryColor(),
        paddingLeft:15,
        paddingRight:15

    },
    headerTitleStyle: {
        color: '#fff',
        fontWeight:'normal',
        paddingLeft:0
    },


});
