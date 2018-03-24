import chai from 'chai';
import { extractRealWordsOnly } from '../../src/dictionary/dictionary';

const expect = chai.expect;

describe('dictionary', function () {
    describe('#extractRealWordsOnly', function () {
        it('should only output real words', function () {
            const words = ['fwzx', 'fff', 'sun', 'lord', 'bvxc'];
            const result = extractRealWordsOnly(words);

            expect(result).to.eql(['sun', 'lord']);
        });
    });
});
