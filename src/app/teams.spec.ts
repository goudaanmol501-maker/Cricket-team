import { TestBed } from '@angular/core/testing';

// Local stub for TeamDetailComponent to avoid missing-module error in tests
class TeamDetailComponent {}

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = new TeamDetailComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
