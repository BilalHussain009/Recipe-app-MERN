export default (state = {}, action) => {
    switch (action.type) {

      case 'set':
        return {
          recipe: action.recipe
        };
      
      default:
        return state;
    }
  };
  