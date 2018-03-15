
const initState = {
  playerInfo:{},
  playerStats:[],
  userInfo:{
    //isLoggedIn: false
  },
  login:{
    username:'',
    password:'',
  },
  showModal:true,
}
const playersReducer = (state = initState || {}, action) =>{
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
        case 'SHOW_MODAL':
        return{
          ...state,
          showModal:true,
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
      case 'LOGOUT':
        return initState;
        case 'LOGIN_SUCCESS':
        const result=action.payload.data;
        const info=result.filter(item=>item.username==state.login.username && item.password==state.login.password);
        
        return {
          ...state,
          userInfo: (info && info.length>0)?info[0]:{},
          playerStats:[],
          playerInfo:{},
          isLoggedIn:(info && info.length>0)?true:false,
          showModal:false,
          login:{},
        }
        
      default:
        return state
    }
  }

  export default playersReducer;