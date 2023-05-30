public with sharing class ContactsService {
  //To expose an Apex method to a Lightning web component, the method must be static and either global or public.
  // Annotate the method with @AuraEnabled.
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContacts() {
    return [
      SELECT Name
      FROM Contact
      WITH SECURITY_ENFORCED
      LIMIT 10
    ];
  }
}
