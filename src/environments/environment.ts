// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: true,
    // Initialize Firebase
   firebase: {
    apiKey: 'AIzaSyA_Pie8se9qQMqAt199rkyE09CAVaawME8',
    authDomain: 'game-proj-cc727.firebaseapp.com',
    databaseURL: 'https://game-proj-cc727.firebaseio.com',
    projectId: 'game-proj-cc727',
    storageBucket: 'game-proj-cc727.appspot.com',
    messagingSenderId: '498010247041'
   }

};


/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
