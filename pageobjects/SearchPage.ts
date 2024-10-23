class SearchPage {
    get searchButton() {
        return $('xpath:(//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon"])[4]');
    }

    get searchField() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/edit_search');
    }

    async searchForNote(searchText: string) {
        await this.searchButton.click();
        await this.searchField.click();
        await this.searchField.addValue(searchText);
    }
}

export default new SearchPage();
