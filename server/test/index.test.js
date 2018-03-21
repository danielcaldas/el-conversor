import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../src';

const expect = chai.expect;

chai.use(chaiHttp);

describe('index', () => {
    describe('GET /convert/:number', () => {
        it('it should get result of number conversion', (done) => {
            chai.request(server)
                .get('/convert/23')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.data).to.equal('convert 23');
                    done();
                });
        });
    });
});
