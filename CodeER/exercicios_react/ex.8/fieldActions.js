export function handleChange(e){
    console.log('HandleChage Chamada')
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}