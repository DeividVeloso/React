const INITIAL_STATE = {
    description: 'ler livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    }, {
        _id: 2,
        description: 'Levar carro no Detran',
        done: false
    }, {
        _id: 3,
        description: 'estudar styled components',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data};
        default:
            return state;
    }
}