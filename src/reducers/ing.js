export default (state =[], action) => {
  console.log(action.type)
    switch (action.type) {
      
      case 'setIng':

        return {
          items:action.ing
        };
      
      
      default:
        return state;
    }
  };
  