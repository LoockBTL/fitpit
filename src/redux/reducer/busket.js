import { INCREMENT, DECREMENT, LOAD_BUSKET, LOAD_ORDER } from "../constatns";



const initialState = {
  entities: [],
}

const busket = (state = initialState, action) => {
  const {type, id} = action;
  const {entities} = state;

  switch(type) {
    case INCREMENT:
      return {...state, entities: { ...entities, [id]: (entities[id] || 0) + 1}};
    case DECREMENT: 
      return {...state, entities: {...entities, [id]: entities[id] > 0 ? (entities[id] || 0) - 1 : 0}};
    case LOAD_BUSKET:
      return state;
    case LOAD_ORDER:
      return {...initialState}
    default:
      return state;
  }
}

export default busket;