import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../src';

const expect = chai.expect;

chai.use(chaiHttp);

describe('api', () => {
    describe('GET /api/convert/:number', () => {
        it('it should get result of number conversion', function (done) {
            chai.request(server)
                .get('/api/convert/44?sort=true')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.eql({
                        words: ['gg','gh','gi','hg','hh','hi','ig','ih','ii']
                    });
                    done();
                });
        });

        it('when requesting only real words (dict=true)', function (done) {
            chai.request(server)
                .get('/api/convert/277?dict=true')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.eql({
                        words: ['app', 'asp', 'apr', 'ass', 'css']
                    });
                    done();
                });
        });
    });
});
