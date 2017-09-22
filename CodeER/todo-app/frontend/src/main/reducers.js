import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'ler livro',
        list:[{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done:true
        },{
            _id: 2,
            description: 'Levar carro no Detran',
            done: false
        }, {
            _id:3,
            description: 'estudar styled components',
            done: false
        }]
    })
});
export default rootReducer;