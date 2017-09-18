import React from 'react';
import { Text, StatusBar, View, Button} from 'react-native';
import drawerStyle from './styles';
export default class DrawerMenu extends React.Component {
    render() {
        return (
            <View style={drawerStyle.main}>
                <Text style={drawerStyle.bigblue}>Profile Pic</Text>
                
            </View>
        );
    }
}

