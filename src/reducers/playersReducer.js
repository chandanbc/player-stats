
const initState = {
  playerInfo:{},
  playerStats:[],
  userInfo:{
    isLoggedIn: false
  },
  showModal:true,
}
const playersReducer = (state = initState || {}, action) =>{
  debugger;
  console.log(action.type);
    switch (action.type) {
      case 'PLAYER_DETAILS_SUCCESS':
        return {
          ...state,
          playerInfo: action.payload.data
        }
        case 'PLAYER_STATS_SUCCESS':
        return {
          ...state,
          playerStats: action.payload.data
        }
        case 'CLOSE_MODAL':
        return {
          ...state,
          showModal: false
        }
      case 'UPDATE_LOGIN_STATUS':
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            isLoggedIn: true
          }
        }
      default:
        return state
    }
  }

  export default playersReducer;