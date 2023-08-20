import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RepositoryDetailComponent } from '../repository-detail/repository-detail.component';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent implements OnInit {
  login!: string;
  repositories: any[] = [];
  bsModalRef!: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private repositoryService: GithubService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login') ?? '';

    this.repositoryService.getUserRepositories(this.login).subscribe(
      (data: any[]) => {
        this.repositories = data;
      },
      (error) => {
        console.error('Error loading repositories:', error);
      }
    );
  }

  openRepositoryModal(repository: any) {
    const initialState = {
      title: repository.name,
      description: repository.description,
      language: repository.language,
      hasIssues: repository.has_issues,
      htmlUrl: repository.html_url,
    };

    this.bsModalRef = this.modalService.show(RepositoryDetailComponent, {
      initialState,
    });
  }
}
