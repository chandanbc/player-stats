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