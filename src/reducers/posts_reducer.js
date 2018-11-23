function findIndex(array,string) {
  let index = 0;
  for (let i = 0; i < array.length; i++){
    if (array.name === string){
      index = array[i];
      break
    }
  }

  return index;
}

const initialState= {
  ListWebs : [
    {name:'Blog'},
    {name:'Blog1'}
  ]
};

const posts_reducer = (state=initialState, action) => {
    switch (action.type) {
      case 'LIST_POSTS':
        return [
          ...state,
          state.ListWebs.map((item)=>{
            return (item.state=false)
          }),
          state.ListWebs[findIndex(state.ListWebs,action.name)].state = false
        ]

      default:
        return state
    }
  }
  
  export default posts_reducer
  