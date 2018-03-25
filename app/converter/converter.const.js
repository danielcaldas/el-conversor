/**
 * CONVERT - user demands that current inputted number to be converter.
 * TOGGLE_CONVERTER_OPTION - toggling a converter option (e.g. match dictionary words only)
 * UPDATE_INPUT - user updates conversion input
 */
const ACTIONS = {
    CONVERT: 'CONVERT',
    CONVERT_PENDING: 'CONVERT_PENDING',
    CONVERT_REJECTED: 'CONVERT_REJECTED',
    CONVERT_FULFILLED: 'CONVERT_FULFILLED',
    TOGGLE_CONVERTER_OPTION: 'TOGGLE_CONVERTER_OPTION',
    UPDATE_INPUT: 'UPDATE_INPUT'
};

const OPTIONS = [
    {
        id: 'sort',
        desc: 'Sort words alpha',
        checked: false
    },
    {
        id: 'dict',
        desc: 'Dictionary words only',
        checked: false
    }
];

export { ACTIONS, OPTIONS };
