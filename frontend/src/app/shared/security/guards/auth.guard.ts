import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

	configuration: any;

	constructor(
		private authService: AuthService,
	) { }

	canActivate(): Observable<boolean> {

		return this.authService.verifyAuthentication();

	}

	canLoad(): boolean {

		return true;

	}

}
