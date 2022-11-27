export default interface IMatch {
  id?: number;
  homeTeam: string;
  awayTeam: string;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
}
