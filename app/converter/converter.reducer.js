import { ACTIONS } from './converter.const';

const defaultState = {
    fetching: false,
    error: null,
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

            return { fetching: false, error: null, words };
        }
    }

    return state;
}
