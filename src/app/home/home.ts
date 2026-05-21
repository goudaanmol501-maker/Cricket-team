import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TeamsService } from '../teams';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  teams: any[] = [];
  matchDay = 'Friday';
  matchTime = '8:00 PM – 9:00 PM';

  constructor(private teamsService: TeamsService) {
    this.teams = teamsService.getTeams();
  }
}