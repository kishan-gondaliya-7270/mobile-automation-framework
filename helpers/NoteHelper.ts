import createNotePage from '../pageobjects/CreateNotePage';

class NoteHelper {

    async createTextNote(title: string, body: string) {
        await createNotePage.addButton.click();
        await createNotePage.textNoteOption.click();
        await createNotePage.noteTitleField.addValue(title);
        await createNotePage.noteBodyField.addValue(body);
        await createNotePage.saveButton.click();
        await createNotePage.saveButton.click();
    }

    async createCheckboxNote(title: string, items: string[]) {

        expect(createNotePage.addButton).toBeDisplayed()
        await createNotePage.addButton.click();    
        await createNotePage.checkboxNoteOption.click();    
        await createNotePage.noteTitleField.click();
        await createNotePage.noteTitleField.addValue(title);
        await createNotePage.checkboxItemField.click();
        await createNotePage.editCheckboxItemField.click();
        await createNotePage.editCheckboxItemField.addValue(items[0]);
        await createNotePage.okButton.click();
    
        for (let i = 1; i < items.length; i++) {
            await createNotePage.addItemButton.click();
    
            await createNotePage.editCheckboxItemField.addValue(items[i]);
            await createNotePage.okButton.click();
        }
        await createNotePage.saveButton.click();
        await createNotePage.saveButton.click(); // Go back again to note list
    }
    
    async deleteNoteByTitle(title: string) {
        const selectedNote = await driver.$(`-android uiautomator:new UiSelector().text("${title}")`);
        selectedNote.click()
        await this.deleteNote(); 
    }

    async getAllNoteTitles() {
        const noteTitles = await driver.$('id:com.socialnmobile.dictapps.notepad.color.note:id/title').getText()
        return noteTitles
    }

    async getAllNoteTitlesForCalendar() {
        const noteTitles = await driver.$('id:com.socialnmobile.dictapps.notepad.color.note:id/title').getText()
        return noteTitles
    }

    async deleteNote() {
        const moreOptionsButton = driver.$('accessibility id:More');
        await moreOptionsButton.click();

        const deleteOption = driver.$('-android uiautomator:new UiSelector().text("Delete")');
        await deleteOption.click();

        const confirmButton = driver.$('id:android:id/button1');
        await confirmButton.click();
    }
}

export default new NoteHelper();
