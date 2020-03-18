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
