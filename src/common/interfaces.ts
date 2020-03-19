import { GameType, StatsType, PlayerType, GameCalendar, TeamResponseType } from "./types";

export const REQUESTING_DATA = 'REQUEST_DATA';
export const ERROR = 'ERROR';
export const FILTER_GAMES = 'FILTER_GAMES';
export const GAMES_SUCCESS = 'GAMES_SUCCESS'
export const STATS_SUCCESS = 'STATS_SUCCESS'
export const PLAYERS_SUCCESS = 'SUCCESS'

interface RequestData {
    type: typeof REQUESTING_DATA;
}


interface ErrorData {
    type: typeof ERROR;
    message: string;
}

export interface ResponseGame {
    data: {
        games: Array<GameType>;
        code?: number;
    }
    success: boolean;
}

export interface ResponseStats {
    data: {
        statistics: Array<StatsType>;
        code?: number;
    }
    success: boolean;
}
export interface ResponsePlayers {
    data: {
        team: TeamResponseType;
        code?: number;
    }
    success: boolean;
}

interface GamesSuccessAction {
    type: typeof GAMES_SUCCESS;
    payload: ResponseGame
}

interface PlayersSuccessAction {
    type: typeof PLAYERS_SUCCESS;
    payload: ResponsePlayers;
}

interface StatsSuccessAction {
    type: typeof STATS_SUCCESS;
    payload: ResponseStats;
}

interface GamesFilterAction {
    type: typeof FILTER_GAMES;
    filter: string;
}

export interface State {
    isLoading: boolean;
    error: boolean;
    games: Map<string, GameCalendar>;
    players: Array<PlayerType>;
    stats: Array<StatsType>;
}

export type ActionTypes = StatsSuccessAction | PlayersSuccessAction | GamesSuccessAction | ErrorData | RequestData | GamesFilterAction;

