import { ACTIONS } from './converter.const';

const defaultState = {
    error: null,
    fetching: false,
    input: '',
    options: {
        sort: false,
        dict: false
    },
    words: null
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
        case ACTIONS.UPDATE_INPUT: {
            const input = action.payload;

            return { ...state, input };
        }
    }

    return state;
}
