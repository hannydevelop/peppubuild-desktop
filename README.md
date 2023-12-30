# Peppubuild App

This page holds all information that is needed to setup a desktop application that runs Peppubuild in yur local environment. The goal is to build a self-hosted version of peppubuild that you can use anywhere. We use Google Firebase for authentication so you can access your account anywhere. You can also setup your Github account to store your codes so that they are not lost.

## How to Sync with Github

!coming soon

We are working on incorporating other Git hosting platflorms.

## Instructions

First, download the version that suits your [system's operating system](https://github.com/hannydevelop/peppubuild-desktop/releases). Now, follow the instruction for the operating system package you installed.

### Windows

After downloading the `.exe` package, double click it to start.

### Mac
After downloading the `.dmg` package, double click the `.dmg` file and drag the Peppubuild icon to the Application folder.

Next, right-click the Peppubuild application and "the risk" in the security pop-up in-order to run the application for the first time.

### Linux
After downloading the `.AppImage` package, Right click on the downloaded file and chose **Properties -> Permissions -> Allow executing file as program**. Or, you can run the command below in your terminal.

```bash
// where filename is the name of the downloaded file.
chmod +x filename
```

The command above will do the same thing as the setting; making the file an executable (application).