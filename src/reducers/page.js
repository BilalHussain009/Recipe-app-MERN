export default (state = {}, action) => {
    switch (action.type) {

      case 'setPage':
        return {
          page:action.page
        };
      
      default:
        return state;
    }
  };
  