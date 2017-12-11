import React from 'react';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';

const TabBar = () => (
    <Tabs>
    <Tab label = "Top" />
    <Tab label = "Latest"/>
    <Tab label = "People"/>
    <Tab label = "Photos"/>
    <Tab label = "Videos"/>
    <Tab label = "News"/>
    <Tab label = "Broadcast"/>
    </Tabs>
);

export default TabBar;