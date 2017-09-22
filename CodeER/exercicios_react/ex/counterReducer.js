const INITIAL_STATE = { step: 1, number: 0 };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INC":
      //Ele vai retornar um novo state com a única pripriedade number alterardo.
      return { ...state, number: state.number + state.step };

    case "DEC":
      //Ele vai retornar um novo state com a única pripriedade number alterardo.
      return { ...state, number: state.number - state.step };

    case "STEP_CHANGED":
      //Ele vai retornar um novo state com a única pripriedade number alterardo.
      //Esse + é para ele entender que é para somar e não concatenar
      return { ...state, step: + action.payload };

    default:
      return state;
  }
}
