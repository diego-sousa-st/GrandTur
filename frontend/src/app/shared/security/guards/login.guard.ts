import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavegacaoService } from '../../services/navegacao.service';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(
		private authService: AuthService,
		private redirectService: NavegacaoService
	) { }

	canActivate(): Observable<boolean> {

		return this.authService.isAuthenticated().pipe(
			map(isAuthenticated => {

				if(isAuthenticated) {

					this.redirectService.redirectToHome();

				}

				return !isAuthenticated;

			})
		);

	}

}
