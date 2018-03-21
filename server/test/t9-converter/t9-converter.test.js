import chai from 'chai';
import { convertNumberToWords } from '../../src/t9-converter/t9-converter.js';

const expect = chai.expect;

describe('t9-converter', function () {
    describe('#convertNumberToWords', function () {
        describe('when options.sortWords is true', function () {
            it('should convert input number (23) to expected list of words', function () {
                const result = convertNumberToWords(23, { sortWords: true });

                expect(result).to.eql(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
            });

            it('should convert input number (277) to expected list of words', function () {
                const result = convertNumberToWords('277', { sortWords: true });

                expect(result).to.eql(['app', 'apq', 'apr', 'aps', 'aqp', 'aqq',
                    'aqr', 'aqs', 'arp', 'arq', 'arr', 'ars', 'asp', 'asq', 'asr',
                    'ass', 'bpp', 'bpq', 'bpr', 'bps', 'bqp', 'bqq', 'bqr', 'bqs',
                    'brp', 'brq', 'brr', 'brs', 'bsp', 'bsq', 'bsr', 'bss', 'cpp',
                    'cpq', 'cpr', 'cps', 'cqp', 'cqq', 'cqr', 'cqs', 'crp', 'crq',
                    'crr', 'crs', 'csp', 'csq', 'csr', 'css']);
            });
        });

        describe('when options.sortWords is false', function () {
            const result = convertNumberToWords('22');

            expect(result).to.eql(['aa','ba','ca','ab','bb','cb','ac','bc','cc']);
        });

        describe('when no number is provided', function () {
            it('should return empty array', function () {
                const result = convertNumberToWords();

                expect(result).to.eql([]);
            });
        });

        describe('when number with only one digit is provided', function () {
            it('should produce correct list of words', function () {
                const result = convertNumberToWords(7);

                expect(result).to.eql(['p', 'q', 'r', 's']);
            });
        });
    });
});
