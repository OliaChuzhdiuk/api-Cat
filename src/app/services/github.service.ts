import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://api.github.com/users').pipe(
      catchError((error: any) => {
        console.error('Error loading users:', error);
        return throwError(error);
      })
    );
  }

  searchUsers(query: string): Observable<any> {
    const url = `https://api.github.com/search/users?q=${query}`;
    return this.http.get<any>(url);
  }

  getUserRepositories(login: string): Observable<any[]> {
    const url = `https://api.github.com/users/${login}/repos`;
    return this.http.get<any[]>(url);
  }
}
