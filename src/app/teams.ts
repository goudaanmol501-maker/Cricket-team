import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private teams = [
    { id: 'team-a', name: 'Team A', players: ['Anmol', 'Ganesh', 'Sudeep'] },
    { id: 'team-b', name: 'Team B', players: ['Rohan', 'Roshan', 'Rovan'] },
  ];

  getTeams(): any[] {
    return this.teams;
  }

  getPlayers(teamId: string): any[] {
    const team = this.teams.find((item) => item.id === teamId);
    return team ? team.players : [];
  }
}