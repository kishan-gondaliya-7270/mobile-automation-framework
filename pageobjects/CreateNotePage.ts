class CreateNotePage {
    get addButton() {
        return $('accessibility id:Add');
    }

    get textNoteOption() {
        return $('-android uiautomator:new UiSelector().className("android.widget.LinearLayout").instance(3)');
    }

    get checkboxNoteOption() {
        return $('-android uiautomator:new UiSelector().className("android.widget.LinearLayout").instance(4)');
    }

    get noteTitleField() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/edit_title');
    }

    get noteBodyField() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/edit_note');
    }

    get saveButton() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/back_btn');
    }

    get editCheckboxItemField() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/edit');
    }
    get checkboxItemField() {
        return $('-android uiautomator:new UiSelector().resourceId(\"com.socialnmobile.dictapps.notepad.color.note:id/text\").instance(0)');
    }

    get addItemButton() {
        return $('-android uiautomator:new UiSelector().text("Add Item").instance(1)');
    }

    get okButton() {
        return $('id:android:id/button1');
    }
}

export default new CreateNotePage();
