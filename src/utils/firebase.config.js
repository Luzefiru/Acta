/* firebase.config.js */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getPerformance } from 'firebase/performance';

const firebaseConfig = {
  apiKey: 'AIzaSyBPxPQQ8Vh4K9V-eSnCbsxHKZdJGJZD5FI',
  authDomain: 'acta-blog.firebaseapp.com',
  projectId: 'acta-blog',
  storageBucket: 'acta-blog.appspot.com',
  messagingSenderId: '224756731100',
  appId: '1:224756731100:web:14ddc366b9d42b84ceb819',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth service
const auth = getAuth(app);

// Initialize performance analytics
getPerformance(app);

export { app, auth };
