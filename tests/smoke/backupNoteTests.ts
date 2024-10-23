import noteHelper from '../../helpers/NoteHelper';
import { completeOnboarding } from '../../helpers/OnBoardingHelper';
import BackupPage from '../../pageobjects/BackupPage';

const textNoteTitle = 'Test Note for Backup';
const noteContent = 'This is a test note content for backup.';
const backupPWD = 'test'
describe('Backup Note Tests', () => {
    before(async () => {
        await completeOnboarding();
        await noteHelper.createTextNote(textNoteTitle, noteContent);
    });

    it('should take a backup of the note', async () => {
        await BackupPage.mainButton.click(); 
        await BackupPage.backupOption.click();
        await BackupPage.backupInstance.click();
        await BackupPage.backupButton.click();

        await BackupPage.passwordField.click();
        await BackupPage.passwordField.addValue(backupPWD);
        await BackupPage.passwordRepeatField.click();
        await BackupPage.passwordRepeatField.addValue(backupPWD);

        await BackupPage.confirmButton.click();

        await BackupPage.firstBackupItem.click(); 
        await BackupPage.viewButton.click();
        await BackupPage.passwordField.click();
        await BackupPage.passwordField.addValue(backupPWD);
        await BackupPage.confirmButton.click()

        const noteTitles = await noteHelper.getAllNoteTitles()
        expect(textNoteTitle).toEqual(noteTitles);
    });
});
