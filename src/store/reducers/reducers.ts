import { State, ActionTypes, REQUESTING_DATA, ERROR, GAMES_SUCCESS, STATS_SUCCESS, PLAYERS_SUCCESS, FILTER_GAMES } from "../../common/interfaces";
import { GameType, StatsType, PlayerType , GameCalendar, TeamResponseType} from "../../common/types";
import { weekDays } from "../../common/dictionaries";
import moment from 'moment';

const initialState: State = {
    isLoading: false,
    games: new Map<string, GameCalendar>(),
    players: [],
    error: false,
    stats: []
};

export default function reducer(state = initialState, action: ActionTypes): State {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                ...state,
                isLoading: true
            }
        case GAMES_SUCCESS:
            console.log(action);
            return {
                ...state,
                isLoading: false,
                games: mapGames(action.payload.data.games as Array<GameType>)
            }
        case STATS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                stats: (action.payload.data.statistics as Array<StatsType>)
            }
        case PLAYERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                players: concatPlayers(action.payload.data.team)
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state;
    }
}

const mapGames = (games: Array<GameType>):Map<string, GameCalendar> => {
    const map = new Map();
   games.forEach((game: GameType) => {
        const date = moment(game.datetime);
        const month = date.format("MMMM");
        const weekDay = date.day();
        console.log(weekDay);
        const newObject: GameCalendar = {
            ...game,
            day: date.get('date'),
            weekDay: (weekDays as any)[weekDay]
        }
        const collection = map.get(month);
        if (!collection) {
            map.set(month, [newObject]);
        } else {
            collection.push(newObject);
        }
    });
    return map;
}

const concatPlayers = (players: TeamResponseType): Array<PlayerType> => {
    return [...players.goalkeepers, ...players.defenses, ...players.centers, ...players.forwards];
}