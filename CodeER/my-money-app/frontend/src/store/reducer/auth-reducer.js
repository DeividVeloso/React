const userKey = "_mymoney_user";
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false
};

export default (state = INITIAL_STATE, action) => {
  console.log("OQUE",action.type)
  switch (action.type) {
    case "TOKEN_VALIDATED":
      if (action.payload) {
        return {
          ...state,
          validToken: true
        };
      } else {
        localStorage.removeItem(userKey);
        return { ...state, validToken: false, user: null };
      }
    case "USER_FETCHED":
    console.log("LOGOUMESMO", action.payload)
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return {
        ...state,
        validToken: true,
        user: action.payload
      };
    default:
      return state;
  }
};
