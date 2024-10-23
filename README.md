
# Mobile App Automation Framework

This repository contains a mobile automation testing framework using WebdriverIO, Appium, TypeScript, and Mocha. You can run the tests either locally using an Android emulator or on BrowserStack. Test reports are generated using Allure.

## Table of Contents

- [Prerequisites](#prerequisites)
  - [To run from Local Setup](#to-run-from-local-setup)
  - [BrowserStack Setup](#browserstack-setup)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [Local Machine](#running-on-local-machine)
  - [BrowserStack](#running-on-browserstack)
- [Folder Structure](#folder-structure)
- [Reporting](#reporting)

## Prerequisites

### To run from Local Setup

To run the tests on your local machine with an Android emulator, make sure you have the following installed:

1. **Node.js** (version 18.x or higher) - [Download Node.js](https://nodejs.org/en/download/package-manager)
2. **OpenJDK 11** - [Download OpenJDK 11](https://readmedium.com/3-steps-to-install-openjdk-11-on-macos-3ae0e10dfa1a)
3. **Android Studio** with an Android Virtual Device (AVD) setup - [Download Android Studio](https://developer.android.com/studio)
   - Ensure that `ANDROID_HOME` is set up in your environment variables.
   - After installation, verify that the Java and node environment variables are set correctly:
```bash
    java -version
    node -v
```
   - Create and run an Android Virtual Device.
   Set up environment variables in your .bashrc, .zshrc, or equivalent shell config:
```bash
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    export PATH=$PATH:$ANDROID_HOME/tools
```

To verify the emulator setup, run:
```bash
    adb devices
```

Install Appium
- Install it via npm:
    ```bash
    npm install -g appium
    ```
Install appium-doctor to Verify System Setup
- Install appium-doctor to ensure your environment is set up properly:
    ```bash
    npm install -g appium-doctor
    ```
- Run appium-doctor:
    ```bash
    appium-doctor --android
    ```
- Ensure that all checks pass.


### BrowserStack Setup

To run the tests on BrowserStack:

1. Create a [BrowserStack account](https://www.browserstack.com/).
2. Obtain your BrowserStack credentials: `BS_USER` (username) and `BS_KEY` (access key).
3. Upload Android APK to BrowserStack and get the `app_url` (e.g., `bs://<app-id>`).
- APK file is located at `/resources/app/android/ColorNote.apk`
4. Create a `.env` file at the root of this repository with the following content:
   ```
   BS_USER=<your_browserstack_username>
   BS_KEY=<your_browserstack_access_key>
   ```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Tests

### Running on Local Machine

1. Ensure that your Android Virtual Device (AVD) is running.
- Verify below value in `/config/wdio.android.conf.ts`   and modify if your Device is different    
    ```bash
    'appium:deviceName': 'Pixel 8',
    'appium:platformVersion': '10.0',
    ```
2. Execute the tests:
   ```bash
   npm run test:local
   ```

### Running on BrowserStack

1. Add your `.env` file with your BrowserStack credentials.
   
2. Ensure you’ve uploaded the APK to BrowserStack and updated the `appium:app` capability in the `wdio.browserstack.android.conf.ts` to point to the BrowserStack `app_url`.
    ```bash
    example : 'appium:app': 'bs://yourapkpath',
    ```
- Verify below value in `/config/wdio.browserstack.android.conf.ts`   and modify if your Device is different. 
    ```bash
    'appium:deviceName': 'Google Pixel 8',
    'appium:platformVersion': '14.0',
    ```
   

3. Execute the tests:
   ```bash
   npm run test:browserstack
   ```

## Folder Structure

- `tests/`: Contains the test directory and files.
- `pageobjects/`: Implements the Page Object Model for the app screens.
- `helpers/`: Utility functions and custom commands.
- `config/`: WebdriverIO configuration files.
- `reports/`: Test reports.
- `resources/`: Contains the APK file and other 
- `package.json`: Defines project dependencies, scripts, and configurations for the project.
- `tsconfig.json`: Configures TypeScript compilation settings
- `.github/workflows/ci.yaml` : This file defines github ci actions. It requires existing env variable inside github secrets.

## Reporting

The test reports are generated using **Allure Reports**.

- To generate and view the report:
    ```bash
    npm run test-local:with-report
    npm run test-browserstack:with-report
    ```

The reports will open in your browser, displaying the results of the test runs.

Note : 
- Currently this framework contains test cases for smoke inside `tests/smoke/` , this framework can be further extended for different test types such as e2e and regression.
