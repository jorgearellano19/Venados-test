import { ActionTypes, REQUESTING_DATA, ERROR, GAMES_SUCCESS, PLAYERS_SUCCESS, STATS_SUCCESS, FILTER_GAMES, ResponseGame, ResponseStats, ResponsePlayers } from "../../common/interfaces";
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import request from "../../services/request";
import { GameType, GameCalendar } from "../../common/types";

export const requestData: any = () => ({
    type: REQUESTING_DATA
});

export function error(err: string): ActionTypes {
    return {
        type: ERROR,
        message: err
    }
};

export const GamesFilters = {
    SHOW_COPA_MX: 'SHOW_COPA_MX',
    SHOW_ASCENSO_MX: 'SHOW_ASCENSO_MX',
    SHOW_ALL: 'SHOW_ALL'
}

export function setGameFilter(filter: string) {
    return {
        type: FILTER_GAMES,
        filter
    }
} 

export function gamesSuccess(data: ResponseGame): ActionTypes {
    return {
        type: GAMES_SUCCESS,
        payload: data
    }
}

export function statsSuccess(data: ResponseStats): ActionTypes {
    return {
        type: STATS_SUCCESS,
        payload: data
    }
}

export function playersSuccess(data: ResponsePlayers): ActionTypes {
    return {
        type: PLAYERS_SUCCESS,
        payload: data
    }
}

export function getData(type: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(requestData);
        try {
            const response = await request.get(`${type}`);
            console.log(response);
            switch (type) {
                case 'players':
                    dispatch(playersSuccess(response.data));
                    break;
                case 'statistics':
                    dispatch(statsSuccess(response.data));
                    break;
                case 'games':
                    console.log(response);
                    dispatch(gamesSuccess(response.data));
                    break;
            }
        } catch (err) {
            dispatch(error(err.message));
        }
    }
};

export function filterGames(games: Map<string, GameCalendar>, filter: string): ActionTypes {
    let newMap = new Map();
    switch(filter) {
        case GamesFilters.SHOW_ASCENSO_MX:
            newMap = filterMap(games, "Ascenso MX");
            break;
        case GamesFilters.SHOW_COPA_MX:
            newMap = filterMap(games, "Copa MX");
            break;
        default:
            newMap =  games;
            break;
    }
    return {
        type: FILTER_GAMES,
        filter: filter,
        filteredItems: newMap
    };
}

function filterMap(map: Map<string, GameCalendar>, cupFiltered: string): Map<string, GameCalendar> {
    const result = new Map();
    map.forEach((value: GameCalendar, key: string) => {
        const matchesInMonth = (value as any as Array<GameCalendar>).filter(game => game.league === cupFiltered);
        if(matchesInMonth.length > 0)
            result.set(key, matchesInMonth);
    });
    return result;
  }
