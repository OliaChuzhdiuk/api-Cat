import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  login!: string;
  repositories: any[] = [];
  searchTerm: string = '';
  searchResults: any[] = [];
  searchError: string = '';
  users: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.login = params['login'];
      this.loadAllUsers();
    });
  }

  loadAllUsers() {
    this.githubService.getAllUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  onSearchInput() {
    // Clear previous error and results
    this.searchError = '';
    this.searchResults = [];

    if (this.searchTerm) {
      // Make a request to GitHub API for user search
      this.githubService.searchUsers(this.searchTerm).subscribe(
        (data: any) => {
          this.searchResults = data.items;
        },
        (error) => {
          this.searchError = 'Error loading users. Please try again.';
        }
      );
    }
  }
}
