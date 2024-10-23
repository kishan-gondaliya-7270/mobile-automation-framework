class OnboardingPage {
    get nextButton() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/step1_next');
    }

    get nextButton2() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/step2_next');
    }

    get permissionText() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/step2description');
    }

    get skipButton() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip');
    }
}

export default new OnboardingPage();
