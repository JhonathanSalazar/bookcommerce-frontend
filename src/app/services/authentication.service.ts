import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

const API_URL = `${environment.BASE_URL}/api/authentication/`

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUSer: Observable<User>
  private currentUserSubjet: BehaviorSubject<User>

  constructor(private http: HttpClient) {
    let storageUser
    const storageUserAsStr = localStorage.getItem('currentUser')

    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr)
    }

    this.currentUserSubjet = new BehaviorSubject<User>(storageUser)
    this.currentUSer = this.currentUserSubjet.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubjet.value
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(API_URL + 'sign-in', user).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response))
          this.currentUserSubjet.next(response)
        }
        return response
      })
    )
  }

  register(user: User): Observable<any> {
    return this.http.post(API_URL + 'sign-up', user)
  }

  logOut() {
    localStorage.removeItem('currentUser')
    this.currentUserSubjet.next(new User)
  }
}
