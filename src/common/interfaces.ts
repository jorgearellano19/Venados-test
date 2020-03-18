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
}

