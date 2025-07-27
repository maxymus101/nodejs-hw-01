import { readContacts } from '../utils/readContacts';

export const addOneContact = async () => {
  const data = await readContacts();
};

addOneContact();
