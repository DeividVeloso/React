import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

//Esse método é sincrono não posso esperar
//não vou ter como retornar o valor do axios por que eu preciso dar um then() para ele esperar e retornar o valor.
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);
    return {
        type: 'TODO_SEARCHED',
        payload: request

    }
}