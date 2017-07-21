import {Md5} from 'ts-md5/dist/md5';
// import jsonp = require('jsonp');
import axios from 'axios';

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

export function getAvatar(email: string): Promise<string> {
  const gravatarUrl: string = '/gravatar.com/';
  const emailHash: string = Md5.hashStr(email).toString();
  const url: string = `${gravatarUrl}${emailHash}.json`;

  const config = {
    headers: {
      'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
  }

  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then(res => {
        resolve(res.data.entry[0].thumbnailUrl);
      })
      .catch((e) => {
        reject(e);
      });
  });
}