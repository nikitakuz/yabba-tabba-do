// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCgh99uu-AAgVr2MG1VBldgih9f3HB4Q10',
    authDomain: 'yabba-tabba-do.firebaseapp.com',
    databaseURL: 'https://yabba-tabba-do.firebaseio.com',
    projectId: 'yabba-tabba-do',
    storageBucket: 'yabba-tabba-do.appspot.com',
    messagingSenderId: '788030023001'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
