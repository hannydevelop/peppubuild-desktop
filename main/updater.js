const autoUpdater = require('electron-updater');
const { dialog, BrowserWindow, ipcMain } = require('electron');
const log = require('electron-log');

let downloadProgress;
log.transports.file.level = "debug";
autoUpdater.autoUpdater.logger = log;

autoUpdater.autoUpdater.autoDownload = false;

autoUpdater.autoUpdater.setFeedURL({
    provider: "github",
    owner: "hannydevelop",
    repo: "peppubuild-desktop",
});

function check() {
    autoUpdater.autoUpdater.checkForUpdates();

autoUpdater.autoUpdater.on('checking-for-update', () => {
    const response = dialog.showMessageBox(null);
console.log(response);
    dialog.showMessageBox({
        type: 'info',
        title: 'Update Available',
        message: 'A new version of app is available. Do you want to update now?',
        buttons: ['Update', 'No']
    }, (index) => {
        if (index) {
            return;
        } else {
            autoUpdater.autoUpdater.downloadUpdate();

            let proWin = new BrowserWindow({
                width: 350,
                height: 35,
                useContentSize: true,
                autoHideMenuBar: true,
                maximizable: false,
                fullscreen: false,
                fullscreenable: false,
                resizable: false,
                title: 'Downloading Update'
            });
            proWin.loadURL(`file://$(__dirname)/progress`);

            proWin.on('closed', () => {
                proWin = null;
            });

            ipcMain.on('download-progress-request', (e) => {
                e.returnValue = downloadProgress;
            });

            autoUpdater.autoUpdater.on('download-progress', (d) => {
                downloadProgress = d.percent;
                autoUpdater.autoUpdater.logger.info(downloadProgress);
            });

            autoUpdater.autoUpdater.on('update-downloaded', () => {
                if (progressWindow) progressWindow.close();

                dialog.showMessageBox({
                    type: 'info',
                    title: 'Update Ready',
                    message: 'A new version of app is ready. Quit and Install now?',
                    buttons: ['Yes', 'Later']
                }, (index) => {
                    if (!index) {
                        autoUpdater.autoUpdater.quitAndInstall();
                    }
                });
            });
        }
    });
});
}

module.exports.check = check;