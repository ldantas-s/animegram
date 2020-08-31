import { useState, useEffect } from 'react';

import { agFirestore } from '../firebase/config';

export default function useFirestore(collection) {
  const [ docs, setDocs ] = useState([]);

  useEffect(() => {
    const unsub = agFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection])

  return { docs };
}