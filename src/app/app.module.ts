import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';

import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RepositoryListComponent,
    RepositoryDetailComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
