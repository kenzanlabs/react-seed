import {Md5} from 'ts-md5/dist/md5';
import jsonp = require('jsonp');

interface GravatarInterface {
  displayName?: string;
  hash?: string;
  id?: string;
  preferredUsername?: string;
  profileUrl?: string;
  requestHash?: string;
  thumbnailUrl?: string;
}

interface EntryInterface {
  entry?: GravatarInterface[];
}

export default class GravatarService {
  private static readonly gravatarUrl: string = '//www.gravatar.com/';

  public static getAvatar(email: string): Promise<string> {
    const emailHash: string = Md5.hashStr(email).toString();
    const url: string = `${this.gravatarUrl}${emailHash}.json`;

    return new Promise((resolve, reject) => {
      jsonp(url, null, (err: {}, data: EntryInterface) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data.entry[0].thumbnailUrl);
        }
      });
    });
  }
}