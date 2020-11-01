// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  restApiEndpoint: 'https://rlc-combinator-backend.herokuapp.com/api',
  restAuthEndpoint: 'https://rlc-combinator-backend.herokuapp.com/auth',
  pusher: {
    key: 'fc5ff8717b2e8cdd4283',
    cluster: 'eu',
    channel: 'rlc-combinator',
    event: 'rlc-comb-event-'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
