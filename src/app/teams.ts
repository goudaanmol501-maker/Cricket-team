import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private teams = [
    { id: 'team-a', name: 'Sailab ke Sikandar', players: ['Sailab', 'Krithik', 'Shreya',"Bhavya"] } ,
    { id: 'team-b', name:  'Luckys Ke Bandar', players: ['Anmol', 'Lakshmana', 'Tanmita','Janvi']},
  ];

  getTeams(): any[] {
    return this.teams;
  }

  getPlayers(teamId: string): any[] {
    const team = this.teams.find((item) => item.id === teamId);
    return team ? team.players : [];
  }
}