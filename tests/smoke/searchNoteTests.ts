import searchPage from '../../pageobjects/SearchPage';
import noteHelper from '../../helpers/NoteHelper';
import { completeOnboarding } from '../../helpers/OnBoardingHelper';


const textNoteTitle = 'Note for searching';
const noteContent = 'Hello This is Text Based Notes create for search';

describe('Search Note Tests', () => {
    before(async () => {
        await completeOnboarding();
        await noteHelper.createTextNote(textNoteTitle, noteContent);
        });

    it('should search for a note', async () => {
        await searchPage.searchForNote(textNoteTitle);
        const noteTitles = await noteHelper.getAllNoteTitles()
        expect(noteTitles).toEqual(textNoteTitle); 
    });

});
