/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-03 11:21:37
 */ 
const {app, BrowserWindow} = require('electron')

let mainWindow 

function createWindow(){
    mainWindow = new BrowserWindow({width:400, height:600,transparent:true,frame:false,resizable:false,maximizable:false})
    mainWindow.loadURL('http://localhost:3001/')
    //mainWindow.setIgnoreMouseEvents(true)
    // mainWindow.webContents.openDevTools()
    mainWindow.on('closed',function(){
        mainWindow = null
    })

    mainWindow.setAlwaysOnTop(true)
}

app.on('ready', createWindow)

app.on('window-all-closed',function (){
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate',function(){
    if(mainWindow === null){
        createWindow()
    }
})