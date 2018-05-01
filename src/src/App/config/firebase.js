import * as firebase                    from 'firebase';
import * as c                           from 'config';

const config = {
    apiKey: c.FIREBASE_API_KEY,
    databaseURL: c.FIREBASE_DATABASE_URL,
    projectId: c.FIREBASE_PROJECT_ID,
}

firebase.initializeApp(config);

export const database = firebase.database();