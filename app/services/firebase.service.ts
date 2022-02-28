import { db } from '~/utils/firebase'

export async function getClientCollection(clientCode: string) {
    clientCode = clientCode.toLowerCase();
    const querySnapshot = await db.collection(clientCode).get();
  
    const data: any = [];

    querySnapshot.forEach((doc: any) => {
      data.push({ ...doc.data(), id: doc.id });
    });
  
    return data;
  }

  