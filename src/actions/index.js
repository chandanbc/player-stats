export const getPlayerInfo = () =>{
    return {
        type: ['PLAYER_DETAILS'],
        payload:{
            request:{
                url:'/summary.json'
            }
        }
    }
}

export const getPlayerStats = () =>{
    return {
        type: ['PLAYER_STATS'],
        payload:{
            request:{
                url:'/chart.json'
            }
        }
    }
}

export const closeModal = () =>{
    return {
        type: 'CLOSE_MODAL',
    }
}



export const Login = () =>{
    return {
        type: ['LOGIN'],
        payload:{
            request:{
                url:'/user.json'
            }
        }
    }
}

export const UpdateUserName = (username) =>{
    return {
        type: 'UPDATE_USERNAME',
        payload:username,
    }
}

export const logout = () =>{
    return {
        type: 'LOGOUT',
    }
}

export const UpdatePassword = (password) =>{
    return {
        type: 'UPDATE_PASSWORD',
        payload:password,
    }
}