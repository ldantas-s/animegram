import { useState, useEffect } from 'react';

import { agStorage, agFirestore, timestamp } from '../firebase/config';


export default function useStorage(file) {
  const [ progress, setProgress ] = useState(0);
  const [ error, setError ] = useState(null);
  const [ url, setUrl ] = useState(null);

  useEffect(() => {
    const storageRef = agStorage.ref(file.name);
    const collectionRef = agFirestore.collection('images');

    storageRef.put(file).on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      collectionRef.add({ url, createdAt: timestamp() });
      setUrl(url);
    })

  }, [file]);

  return { progress, url, error };
}