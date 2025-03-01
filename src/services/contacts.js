import { ContactsCollection } from '../db/models/contacts.js';

export async function getAllContacts() {
  const contacts = await ContactsCollection.find();
  return contacts;
}
