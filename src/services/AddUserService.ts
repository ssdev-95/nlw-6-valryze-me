import jsonwebtoken from 'jsonwebtoken';
import { addDoc, collection, db } from '../database/firebase';
require('dotenv').config();

const key = process.env.SIGN_KEY || '';

type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

class AddUserService {
  async execute (user:User) {
    let token:String = "";

    try {
      const docRef = await addDoc(collection(db, 'users'), user);

      if(!docRef) {
        throw new Error('Something went wrong');
      }

      token = await jsonwebtoken.sign(
        {
          id:docRef.id,
          name:user.name,
          email:user.email
        },
        key,
        { algorithm: 'RS256' }
      );

    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }

     return token;
  }
};

export { AddUserService };