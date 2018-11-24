
const activePosts_reducer = (state={activePost:'Blog'}, action) => {
    switch (action.type) {
      case 'CLICK_POST':
        return (
        Object.assign({}, state, {
          activePost : action.name
        }))

      default:
        return state
    }
  }
  
  export default activePosts_reducer;
  