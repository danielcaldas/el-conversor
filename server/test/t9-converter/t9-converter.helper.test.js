import chai from 'chai';
import { expandWordsForDigit } from '../../src/t9-converter/t9-converter.helper';

const expect = chai.expect;

describe('t9-converter.helper', function () {
    describe('#expandWordsForDigit', function () {
        describe('when no digit is provided', function () {
            it('should throw error', function () {
                expect(() => expandWordsForDigit([])).to.throw('A digit must be provided for function expandWordsForDigit');
            });
        });

        describe('when a digit is provided', function () {
            describe('and empty array of words is provided', function () {
                it('should return provided digit letter mapping', function () {
                    const result = expandWordsForDigit([], 4);

                    expect(result).to.eql(['g', 'h', 'i']);
                });
            });

            describe('and array with words is provided', function () {
                it('should properly expand list of words for the given digit', function () {
                    const result = expandWordsForDigit(['g', 'h', 'i'], 9);

                    expect(result).to.eql(['gw', 'hw', 'iw', 'gx', 'hx', 'ix', 'gy', 'hy', 'iy', 'gz', 'hz', 'iz']);
                });
            });
        });

    });
});
