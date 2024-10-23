class BackupPage {
    get mainButton() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/main_btn3');
    }

    get backupOption() {
        return driver.$("-android uiautomator:new UiSelector().text(\"Backup\")");
    }

    get backupInstance() {
        return driver.$("-android uiautomator:new UiSelector().className(\"android.widget.LinearLayout\").instance(3)");
    }

    get backupButton() {
        return driver.$("id:com.socialnmobile.dictapps.notepad.color.note:id/btn_backup");
    }

    get passwordField() {
        return driver.$("id:com.socialnmobile.dictapps.notepad.color.note:id/password");
    }

    get passwordRepeatField() {
        return driver.$("id:com.socialnmobile.dictapps.notepad.color.note:id/password_repeat");
    }

    get confirmButton() {
        return driver.$("id:android:id/button1");
    }

    get firstBackupItem() {
        return driver.$("xpath://android.widget.ListView[@resource-id=\"com.socialnmobile.dictapps.notepad.color.note:id/list\"]/android.widget.LinearLayout[1]");
    }

    get viewButton() {
        return driver.$("-android uiautomator:new UiSelector().text(\"View\")");
    }
}

export default new BackupPage();
