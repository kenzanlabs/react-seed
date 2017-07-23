export interface ContactInterface {
  id?: number;
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

export default class ContactService {

  public static buildName(contact: ContactInterface): string {
    const _middleName: string = contact.middleName ? ` ${contact.middleName}` : '';
    const _lastName: string = contact.lastName ? ` ${contact.lastName}` : '';

    return `${contact.firstName}${_middleName}${_lastName}`;
  }
}