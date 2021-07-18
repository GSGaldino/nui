export default function cartReducer(state = {counter: 0}, action){
  switch (action.type){
    case "addItem":
      return {counter: counter++}
      
    case "removeItem":
      return {counter: counter--}

    case "clear":
      return {counter: 0}

    default: 
      return state;
  }
};
