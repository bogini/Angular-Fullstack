/**
 * Main application routes
 */
import path from 'path';

import thingRouter from './api/thing';
import errors from './components/errors';

export default function (app) {
  // Insert routes below
  app.use('/api/things', thingRouter);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);

  // All other routes should redirect to the app.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
    });
}
