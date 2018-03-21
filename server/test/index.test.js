import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../src';

const expect = chai.expect;

chai.use(chaiHttp);

describe('api', () => {
    describe('GET /convert/:number', () => {
        it('it should get result of number conversion', (done) => {
            chai.request(server)
                .get('/convert/44')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.eql({
                        data: ['gg','gh','gi','hg','hh','hi','ig','ih','ii']
                    });
                    done();
                });
        });
    });
});
