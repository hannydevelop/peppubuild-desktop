const { autoUpdater } = require("electron-updater");
const { dialog, BrowserWindow, ipcMain } = require('electron');
const log = require('electron-log');

log.transports.file.level = "debug";
autoUpdater.logger = log;

autoUpdater.autoDownload = false;

autoUpdater.setFeedURL({
    provider: "github",
    owner: "hannydevelop",
    repo: "peppubuild-desktop",
});

function check() {
    autoUpdater.setFeedURL({
        provider: "github",
        owner: "hannydevelop",
        repo: "peppubuild-desktop",
    });

    autoUpdater.on("checking-for-update", function (_arg1) {
        return log.info("Checking for update...");
    });
    autoUpdater.on("update-available", function (_arg2) {
        dialog.showMessageBox({
            type: 'info',
            title: 'Update Available',
            message: 'A new version of Peppubuild is available. Do you want to update now?',
            buttons: ['Update', 'No']
        }).then((response) => {
            if (process.platform == "darwin" && response.response == 0) {
                dialog.showMessageBox({
                    type: 'error',
                    title: 'Auto Update Unsucessful',
                    message: 'Auto-update prohibited for MacOS. You can download latest version from https://github.com/hannydevelop/peppubuild-desktop/releases/latest ',
                    buttons: ['Okay']
                })
            } else if (response.response == 1) {
                return
            } else {
                autoUpdater.downloadUpdate();
            }
        })
    });
    autoUpdater.on("update-not-available", function (_arg3) {
        return log.info("Update not available.");
    });
    autoUpdater.on("error", function (err) {
        return log.info("Error in auto-updater. " + err);
    });
    autoUpdater.on("download-progress", function (progressObj) {
        return log.info("downloading update");
    });
    autoUpdater.on("update-downloaded", function (_arg4) {
        dialog.showMessageBox({
            type: 'info',
            title: 'Update Ready',
            message: 'A new version of Peppubuild is ready. Quit and Install now?',
            buttons: ['Yes', 'Later']
        }, (index) => {
            if (!index) {
                autoUpdater.quitAndInstall();
            }
        });
    });

}

module.exports.check = check;