import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const data = await readContacts();
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    if (newContacts.length === 0) return;

    const updatedContacts = [...data, ...newContacts];
    console.log('updateContacts -> ', updatedContacts);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log('Error -> ', error);
  }
};

generateContacts(5);
