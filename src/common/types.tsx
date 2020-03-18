export type GameType = {
    local: boolean;
    opponent: string;
    opponent_image: string;
    datetime: string;
    league: string;
    image: string;
    home_score: number;
    away_score: number;
};

export type GameCalendar = {
    local: boolean;
    opponent: string;
    opponent_image: string;
    datetime: string;
    league: string;
    image: string;
    home_score: number;
    away_score: number;
    day: number;
    weekDay: string;
} 

export type StatsType = {
    position: number;
    image: string;
    team: string;
    games: number;
    win: number;
    loss: number;
    tie: number;
    f_goals: number;
    a_goals: number;
    score_diff: number;
    points: number;
    efect: any;
} 