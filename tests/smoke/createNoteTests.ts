import { before } from 'mocha';
import noteHelper from '../../helpers/NoteHelper';
import { completeOnboarding } from '../../helpers/OnBoardingHelper';

describe('Create Notes Tests', () => {
    before(async () => {
        await completeOnboarding();
    });

    it('should create a text note and verify it', async () => {
        const textNoteTitle = 'Text Note';
        const noteContent = 'Hello This is Text Based Notes';

        await noteHelper.createTextNote(textNoteTitle, noteContent);

        const noteTitles = await noteHelper.getAllNoteTitles()
        expect(noteTitles).toEqual(textNoteTitle); 
    });

    it('should create a checkbox note and verify it', async () => {
        const checkboxNoteTitle = 'Checkbox Note';
        const checkboxItems = ['Wakeup', 'BreakFast', 'Plan Task'];
    
        await noteHelper.createCheckboxNote(checkboxNoteTitle, checkboxItems);
        
        const noteTitles = await noteHelper.getAllNoteTitles()
        expect(noteTitles).toEqual(checkboxNoteTitle);         
    });

    it('should delete a note and verify it', async () => {
       const checkboxNoteTitle = 'Checkbox Note';

       await noteHelper.deleteNoteByTitle(checkboxNoteTitle)

       const noteTitles = await noteHelper.getAllNoteTitles();
       expect(noteTitles).not.toContain(checkboxNoteTitle)
  
    });
});
