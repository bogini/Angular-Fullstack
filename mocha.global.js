import app from '.';

after((done) => {
  app.angularFullstack.on('close', () => done());
  app.angularFullstack.close();
});
