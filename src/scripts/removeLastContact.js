import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    if (data.length !== 0 && Array.isArray(data)) {
      const editedData = data.slice(0, data.length - 1);
      await writeContacts(editedData);
    }
  } catch (error) {
    console.log('Some Error: ', error);
  }
};

removeLastContact();
