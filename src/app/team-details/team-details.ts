import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../teams';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team-details.html',
  styleUrls: ['./team-details.css']
})
export class TeamDetailComponent implements OnInit {
  teamId = '';
  teamName = '';
  players: any[] = [];

  constructor(private route: ActivatedRoute, private teamsService: TeamsService) {}

  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('id') || '';
    this.teamName = this.teamId === 'team-a' ? 'Team A' : 'Team B';
    this.players = this.teamsService.getPlayers(this.teamId);
  }
}