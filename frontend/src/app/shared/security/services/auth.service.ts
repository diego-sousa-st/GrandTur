import { Injectable } from '@angular/core';

import { api, headersNames, userStore } from '../../../app.constants';
import { Subject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavegacaoService } from '../../services/navegacao.service';
import { HttpCustomizedService } from '../../services/http-customized.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	config: any;

	ROLE_PROFESSOR: string = 'ROLE_PROFESSOR';
	ROLE_ADMIN: string = 'ROLE_ADMIN';
	ROLE_ALUNO: string = 'ROLE_ALUNO';

	authenticated: Subject<boolean> = new Subject();
	authenticated$ = this.authenticated.asObservable();

	constructor(
		private httpCustomizedService: HttpCustomizedService,
		private redirectService: NavegacaoService
	) { }

	isAuthenticatedSubject() {

		this.isAuthenticated()
			.subscribe(result => this.authenticated.next(result));

	}

	isAuthenticated(): Observable<boolean> {

		const token = localStorage.getItem(headersNames.Authorization);
		const user = localStorage.getItem(userStore);

		if(token && user) {

			this.authenticated.next(true);

			return of(true);

		} else if(token && !user) {

			return this.getAuthenticatedUser().pipe(map(
				userResponse => {

					if(!userResponse) {

						this.authenticated.next(false);

						return false;

					}

					localStorage.setItem(userStore, JSON.stringify(userResponse));

					this.authenticated.next(true);

					return true;

				}

			));

		} else {

			this.authenticated.next(false);

			return of(false);

		}

	}

	auth(user: any) {

		localStorage.setItem(userStore, JSON.stringify(user));

		this.authenticated.next(true);

	}

	deAuth() {

		this.authenticated.next(false);

		this.redirectUnauthenticated(false);

	}

	hasAnyAuthority(authorities: string[]): Observable<boolean> {

		return of(this.hasAnyAuthorityDirect(authorities));

	}

	hasAnyAuthorityDirect(authorities: string[]): boolean {

		const user = JSON.parse(localStorage.getItem(userStore));

		if(!user || !user.roles) {

			return false;

		}

		const activeRole = user.roles[0].authority;

		for(let i = 0; i < authorities.length; i++) {

			if(activeRole === authorities[i]) {

				return true;

			}

		}

		return false;

	}

	getAuthenticatedUser(): Observable<Response> {

		return of(new Response());

	}

	verifyAuthentication(): Observable<boolean> {

		return this.isAuthenticated().pipe(
			map(isAuthenticated => this.redirectUnauthenticated(isAuthenticated))
		);

	}

	redirectUnauthenticated(isAuthenticated: boolean): boolean {

		if(!isAuthenticated) {

			this.redirectService.redirectUnauthenticated();

		}

		return isAuthenticated;

	}

}
