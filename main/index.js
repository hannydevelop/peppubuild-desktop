// @ts-ignore
"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var express = require('express');
// var server_1 = require("./server");
var server_1 = require("peppubuild-server");
var checkForUpdates = require('./updater.js');
const { autoUpdater } = require("electron-updater");

checkForUpdates.check();

function createWindow() {
    // Start the express server
    server_1.app.use(express.static(path.join(__dirname, "public")));
    server_1.app.use(express.json({ limit: '50mb' }));
    server_1.app.use(express.urlencoded({ limit: '50mb' }));
    (0, server_1.startServer)();
    // checkForUpdates.check();
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "public", "preload.js")
        },
        width: 800
    });
    // and load the index of the app.
    mainWindow.loadURL('http://localhost:1404');
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", function () {
    autoUpdater.checkForUpdates();
    createWindow();
    electron_1.app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=index.js.map