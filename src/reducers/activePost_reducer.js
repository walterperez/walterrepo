
const activePosts_reducer = (state={activePost:'Blog'}, action) => {
    switch (action.type) {
      case 'CHANGE_ACTUAL_POST':
        return {
          ...state.activePost = action.postName 
        }
      default:
        return state
    }
  }
  
  export default activePosts_reducer;
  