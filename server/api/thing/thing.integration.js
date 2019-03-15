

/* globals describe, expect, it, beforeEach, afterEach */

import request from 'supertest';

const app = require('../..');

describe('Thing API:', () => {
  describe('GET /api/things', () => {
    let things;

    beforeEach((done) => {
      request(app)
        .get('/api/things')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          things = res.body;
          done();
        });
    });

    it('should respond with JSON array', () => {
      expect(things).to.be.instanceOf(Array);
    });
  });
});
