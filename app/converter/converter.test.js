import { ACTIONS } from './converter.const';
import reducer from './converter.reducer';
import * as actions from './converter.actions';

describe('Converter', () => {
    let victim = {};

    describe('reducer', () => { // @TODO: Add tests to other reducer branches
        test('should map proper state when action is CONVERT_PENDING', () => {
            const state = {
                input: '2',
                fetching: false
            };
            const newState = reducer(state, {
                type: ACTIONS.CONVERT_PENDING
            });

            expect(newState).toEqual({
                input: '2',
                fetching: true
            });
        });
    });

    describe('actions', () => { // @TODO: Add tests to other actions
        test('#toggleConverterOption', () => {
            const currOptions = { dict: false, sort: false };
            const toggledOption = 'dict';
            const res = actions.toggleConverterOption(currOptions, toggledOption);

            expect(res).toEqual({ payload: { dict: true, sort: false }, type: 'TOGGLE_CONVERTER_OPTION' });
        });
    });

    // @TODO: Some tests for Converter component as well
});
