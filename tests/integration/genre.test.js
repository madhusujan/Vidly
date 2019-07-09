const request = require('supertest')
let server;

describe('/api/genres', () =>{
    beforeEach(() => { server = require('../../index'); })
    afterEach(() => { server.close();});

    describe('GET /', () => {
        it ('should return all genres', () => {
            const res = await request(server).get('/api/genres');
            except(res.status).toBe(200);
        })
    });
});