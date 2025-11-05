import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _loggedIn$ = new BehaviorSubject<boolean>(
    typeof window !== 'undefined' &&
    (sessionStorage.getItem('auth') === '1' || localStorage.getItem('auth') === '1')
  );

  isLoggedIn(): boolean {
    return this._loggedIn$.value;
  }

  login(email: string, password: string, remember = false): boolean {
    if (!email || !password) return false; // branche ta vraie API ici
    this._loggedIn$.next(true);
    sessionStorage.setItem('auth', '1');
    if (remember) localStorage.setItem('auth', '1');
    return true;
  }

  logout(): void {
    this._loggedIn$.next(false);
    sessionStorage.removeItem('auth');
    localStorage.removeItem('auth');
  }
}
