class PermissionHelper {
    async allowStoragePermission() {
        try {
            const allowButton = driver.$("//android.widget.Button[@text='Allow']");
            
            if (await allowButton.isDisplayed()) {
                await allowButton.click();
            }
        } catch (error) {
            console.error("Permission dialog not displayed, or element not found.");
        }
    }
}

export default new PermissionHelper();
