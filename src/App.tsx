import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { FirebaseAppProvider, useFirebaseApp, FirestoreProvider } from 'reactfire';
import { BottlesWrapper } from './components/BottlesWrapper';
import { firebaseConfig } from './FirebaseConfig';

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseApp />
    </FirebaseAppProvider>
  );
}

function FirebaseApp() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <BottlesWrapper />
    </FirestoreProvider>
  )
}

export default App;