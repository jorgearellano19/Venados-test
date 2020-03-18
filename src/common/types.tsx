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

export type PlayerType = {
    name: string;
    first_surname: string;
    second_surname: string;
    birthdate: string;
    birth_place: string;
    weight: number;
    height: number;
    position: string;
    number: number;
    position_short: string;
    last_team: string;
    image: string;
}

export type PlayerResponseType = {
    team: TeamResponseType;
}

export type TeamResponseType = {
    forwards: Array<PlayerType>;
    centers: Array<PlayerType>;
    defenses: Array<PlayerType>;
    goalkeepers: Array<PlayerType>;

}