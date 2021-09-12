import { collection, db, getDocs } from '../database/firebase';

class GetUsersService {
  async execute() {
    let users:any[] = [];
    try {
      const docsRef = await getDocs(collection(db, 'users'));

      if(!docsRef) {
        throw new Error('Something went wrong');
      }

      docsRef.forEach(doc=>{
        users.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            admin: doc.data().admin
        })
      });
    }
    catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }

    return users;
  }
}

export { GetUsersService };