const initialState= {
  Hamburguer: false
};

const hamburguer_reducer = (state=initialState,action={}) => {
  switch(action.type){      
  
  case 'SHOW_MENU':
    return {
      ...state, Hamburguer:true
    }; 

  case 'CLOSE_MENU':
    return {
      ...state, Hamburguer:false
    }; 

  default:
    return state;
  }
}
export default hamburguer_reducer
