import permissionHelper from '../helpers/PermissionHelper';
import OnboardingPage from '../pageobjects/OnboardingPage';

export async function completeOnboarding() {
    if (await OnboardingPage.nextButton.isDisplayed()) {
        await OnboardingPage.nextButton.click();
        
        if (await OnboardingPage.permissionText.isDisplayed()) {
            await OnboardingPage.nextButton2.click();
            await permissionHelper.allowStoragePermission();
        }

        await OnboardingPage.skipButton.click(); 
    }
}
