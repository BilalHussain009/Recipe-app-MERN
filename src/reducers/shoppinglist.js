export default (state = {}, action) => {
  
    switch (action.type) {
      case 'addToList':
        
        return {
          list: action.list
        };
      
      default:
        return state;
    }
  };
  