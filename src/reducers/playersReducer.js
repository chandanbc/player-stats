
const initState = {
  playerInfo:{},
  playerStats:[],
  userInfo:{
    isLoggedIn: false
  },
  login:{
    username:'',
    password:'',
  },
  showModal:true,
}
const playersReducer = (state = initState || {}, action) =>{
  console.log(action.type);
  debugger;
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
        case 'UPDATE_USERNAME':
        return {
          ...state,
          login: {
            ...state.login,
            username: action.payload
          }
        }
        case 'UPDATE_PASSWORD':
        return {
          ...state,
          login: {
            ...state.login,
            password: action.payload
          }
        }
      case 'UPDATE_LOGIN_STATUS':
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            isLoggedIn: true
          }
        }
        case 'LOGIN_SUCCESS':
        debugger;
        const result=action.payload.data;
        
        return {
          ...state,
          userInfo: result.filter(item=>item.username==state.login.username && item.password==state.login.password)
        }
      default:
        return state
    }
  }

  export default playersReducer;