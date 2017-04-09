'use strict';

// index.js (main process)
// - GUI (renderer process)
// - GUI (renderer process)
// - GUI (renderer process)

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let mainWindow = null;
let menu = Menu.buildFromTemplate([
  {
    label: "Application",
    submenu: [
      {label: "About Application", selector: "orderFrontStandardAboutPanel:"},
      {type: "separator"},
      {label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]
  },
  {
    label: "View",
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function(item, focusedWindow) {
          if (focusedWindow)
            focusedWindow.reload();
        }
      },
    ]
  },
  {
    label: "Edit",
    submenu: [
      { type: "separator" },
      { label: "Undo", accelerator: "Command+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "Command+X", selector: "cut:" },
      { label: "Copy", accelerator: "Command+C", selector: "copy:" },
      { label: "Paste", accelerator: "Command+V", selector: "paste:" },
      { label: "Select All", accelerator: "Command+A", selector: "selectAll:" }
    ]
  }
]);




app.on('ready', function() {

  Menu.setApplicationMenu(menu);

  // create window
  mainWindow = new BrowserWindow({width: 1100, height: 700});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

