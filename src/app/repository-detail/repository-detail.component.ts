import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.scss'],
})
export class RepositoryDetailComponent implements OnInit {
  title: string = '';
  description: string = '';
  language: string = '';
  hasIssues: boolean = false;
  htmlUrl: string = '';

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}

  closeModal() {
    this.bsModalRef.hide();
  }
}
