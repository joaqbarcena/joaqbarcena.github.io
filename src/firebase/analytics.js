import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBWu8xY7no1GjGTCckMZ3CWh9xTns2Oxhc",
  authDomain: "joaquin-barcena-portfolio.firebaseapp.com",
  projectId: "joaquin-barcena-portfolio",
  storageBucket: "joaquin-barcena-portfolio.appspot.com",
  messagingSenderId: "317625930944",
  appId: "1:317625930944:web:32983c1d6ab8b2c227c925",
  measurementId: "G-01JCVRCBFW"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export function gaEvent(path, data = null) {
    logEvent(analytics, path, data)
}

