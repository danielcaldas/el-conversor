import chai from 'chai';
import { convertNumberToWords } from '../../src/t9-converter/t9-converter.js';

const expect = chai.expect;

describe('t9-converter', function () {
    describe('#convertNumberToWords', function () {
        it('should convert input number (23) to expected list of words', function () {
            const result = convertNumberToWords(23);

            expect(result).to.eql(['ae', 'be', 'ce', 'ad', 'bd', 'cd', 'af', 'bf', 'cf']);
        });

        it('should convert input number (277) to expected list of words', function () {
            const result = convertNumberToWords('277', { sortWords: true });

            expect(result).to.eql(['app', 'bpp', 'cpp', 'aqp', 'bqp', 'cqp', 'arp',
                'brp', 'crp', 'asp', 'bsp', 'csp', 'apq', 'bpq', 'cpq',
                'aqq', 'bqq', 'cqq', 'arq', 'brq', 'crq', 'asq', 'bsq',
                'csq', 'apr', 'bpr', 'cpr', 'aqr', 'bqr', 'cqr', 'arr',
                'brr', 'crr', 'asr', 'bsr', 'csr', 'aps', 'bps', 'cps',
                'aqs', 'bqs', 'cqs', 'ars', 'brs', 'crs', 'ass', 'bss', 'css']);
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
