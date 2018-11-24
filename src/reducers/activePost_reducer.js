
const activePosts_reducer = (state={activePost:'Blog'}, action = {}) => {
    switch (action.type) {
      case 'CLICK_POST':
      console.log(action);
        return {...state, activePost : action.name};

      default:
        return state;
    }
  }
  
  export default activePosts_reducer;
  