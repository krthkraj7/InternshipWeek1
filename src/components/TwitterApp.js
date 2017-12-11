import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Common from './Common';


const TwitterApp = () => (
    <MuiThemeProvider muiTheme = {getMuiTheme(lightBaseTheme)}>
        <Common />        
    </MuiThemeProvider>
);

export default TwitterApp;