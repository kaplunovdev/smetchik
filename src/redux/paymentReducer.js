const ADD_WORK = 'ADD_WORK';

const initialState = {
    typeWork: [
        {
            id: 1,
            title: 'Укладка тротуарной плитки',
        },
        {
            id: 2,
            title: 'Монтаж поребрика',
        },
        {
            id: 3,
            title: 'Асфальтирование',
        },
    ],
}

export const paymentReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_WORK:

        default:
            return state;
    }
}

export const addWork = (title) => ({type: ADD_WORK,title})