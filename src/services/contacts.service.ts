import {Md5} from 'ts-md5/dist/md5';
import axios from 'axios';

interface ContactInterface {
  id?: number;
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

class ContactsService {
  contacts?: ContactInterface[];

  constructor (contacts?: ContactInterface[]) {
    this.contacts = contacts;
  }

  getContacts(): Promise<ContactInterface[]> {
    return Promise.resolve(this.contacts);
  }

  setContacts(contacts: ContactInterface[]): Promise<ContactInterface[]> {
    return new Promise ((resolve, reject) => {
      try {
        this.contacts = contacts;
        resolve (this.contacts);
      } catch (err) {
        reject(err);
      }
    });
  }

  getAvatar(email: string): Promise<string> {
    const gravatarUrl = 'https://www.gravatar.com/';
    const emailHash = Md5.hashStr(email);
    const url = `${gravatarUrl}${emailHash}.json`;

    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          resolve(res.data.entry[0].thumbnailUrl);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}

export default new ContactsService([]);
