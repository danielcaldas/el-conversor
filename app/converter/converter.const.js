/**
 * CONVERT - user demands that current inputted number to be converter.
 */
const ACTIONS = {
    CONVERT: 'CONVERT',
    CONVERT_PENDING: 'CONVERT_PENDING',
    CONVERT_REJECTED: 'CONVERT_REJECTED',
    CONVERT_FULFILLED: 'CONVERT_FULFILLED',
    TOGGLE_CONVERTER_OPTION: 'TOGGLE_CONVERTER_OPTION'
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
