import React from 'react';
import TabNavigator from '../routers/bottomTabs';

class TabsPage extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    render() {
        return (
            <TabNavigator />
        );
    }
}

export default TabsPage;