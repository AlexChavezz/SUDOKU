const { app, BrowserWindow } = require('electron');
// const { click }  = require( './js/button');

let appWindow;

function createWindow(){
    appWindow = new BrowserWindow({
        icon: 'logo.png',
        width:1300, 
        height: 670,
        minWidth:1300,
        minHeight: 670,
        autoHideMenuBar: true,
        // webPreferences: {
        //     devTools: false,
        // }
    });
    // -> close app
    appWindow.on ('closed', () => {
        appWindow = null;
    })
    // -> load html
    
    appWindow.loadFile('./public/index.html')
    // click()
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })
}

app.on( 'ready', createWindow)
