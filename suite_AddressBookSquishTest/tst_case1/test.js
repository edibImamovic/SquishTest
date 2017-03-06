function main() {
    startApplication("AddressBookSwing.jar");
    activateItem(waitForObjectItem(":Address Book_JMenuBar", "File"));
    activateItem(waitForObjectItem(":File_JMenu", "New..."));
    activateItem(waitForObjectItem(":Address Book - Unnamed_JMenuBar", "Edit"));
    activateItem(waitForObjectItem(":Edit_JMenu", "Add..."));
    mouseClick(waitForObject(":Address Book - Add.Forename:_JTextField"), 55, 18, 0, Button.Button1);
    type(waitForObject(":Address Book - Add.Forename:_JTextField"), "test");
    type(waitForObject(":Address Book - Add.Forename:_JTextField"), "<Tab>");
    type(waitForObject(":Address Book - Add.Surname:_JTextField"), "testic");
    mouseClick(waitForObject(":Address Book - Add.Email:_JTextField"), 31, 11, 0, Button.Button1);
    type(waitForObject(":Address Book - Add.Email:_JTextField"), "test@testic.mail");
    type(waitForObject(":Address Book - Add.Email:_JTextField"), "<Tab>");
    type(waitForObject(":Address Book - Add.Phone:_JTextField"), "123445433241");
    clickButton(waitForObject(":Address Book - Add.OK_JButton"));
    test.compare(waitForObjectExists(":test@testic.mail_TableItemProxy").column, 2);
    test.compare(waitForObjectExists(":test@testic.mail_TableItemProxy").text, "test@testic.mail");
}
