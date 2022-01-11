const ADD_WORK = 'ADD_WORK';

const initialState = {
    typeWork: [
        {
            count: '',
        },

    ],
}

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORK:
            return {...state, count: action.payload}
        default:
            return state;
    }
}

export const addWork = (count) => ({type: ADD_WORK, count})