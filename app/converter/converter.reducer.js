import { ACTIONS } from './converter.const';

const defaultState = {
    fetching: false,
    error: null,
    words: null,
    options: {
        sort: false,
        dict: false
    }
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONS.CONVERT_PENDING: {
            return { ...state, fetching: true };
        }
        case ACTIONS.CONVERT_REJECTED: {
            const msg = action.payload || '';

            return { ...state, error: msg };
        }
        case ACTIONS.CONVERT_FULFILLED: {
            const words = action.payload;

            return { ...state, fetching: false, error: null, words };
        }
        case ACTIONS.TOGGLE_CONVERTER_OPTION: {
            const options = action.payload;

            return { ...state, options };
        }
    }

    return state;
}
