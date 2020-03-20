export default (state = {}, action) => {
    switch (action.type) {

      case 'setItems':

        return {
          items:action.items
        };
      
      
      default:
        return state;
    }
  };
  