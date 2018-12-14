import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { NavegacaoService } from '../../services/navegacao.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PerfilAdminGuard implements CanActivate, CanLoad {

	constructor(
		private authService: AuthService,
		private redirectService: NavegacaoService
	) { }

	canActivate(): Observable<boolean> {

		return this.authService.hasAnyAuthority(['ROLE_ADMIN']).pipe(
			map(hasAnyAuthority => {

				if(!hasAnyAuthority) {

					this.redirectService.redirectToHome();

				}

				return hasAnyAuthority;

			}));

	}

	canLoad(): boolean {

		return true;

	}

}
