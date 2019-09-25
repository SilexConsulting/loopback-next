import {Client} from '@loopback/testlab';
import {BugApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HomePage', () => {
  let app: BugApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('exposes a default home page', async () => {
    await client
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/);
  });
  it('should validate a good document', async () => {
    await client
      .post('/orders' )
      .send(
        {
          "orderNumber": "12341",

          "customer": {
            "id": 0,
            "name": "Customer 0"
          }
        }
      )
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  it('should not validate a document with an empty customer object', async () => {
    await client
      .post('/orders' )
      .send(
        {
          "orderNumber": "12341",

          "customer": {}
        }
      )
      .expect(422)
      .expect('Content-Type', /application\/json/);
  });

  it('should not validate a document with an empty customer field', async () => {
    await client
      .post('/orders' )
      .send(
        {
          "orderNumber": "12341",

          "customer": ""
        }
      )
      .expect(422)
      .expect('Content-Type', /application\/json/);
  });

  it('exposes self-hosted explorer', async () => {
    await client
      .get('/explorer/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(/<title>LoopBack API Explorer/);
  });
});
