import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { HttpCustomizedService } from '../../services/http-customized.service';
import { Observable, of } from 'rxjs';
import { api } from 'src/app/app.constants';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private httpCustomizedService: HttpCustomizedService) { }

	login(isAdmin: boolean, credentials: any): Observable<Response> {

		return this.httpCustomizedService.post(api.LOGIN, credentials);

	}

	logout(): Observable<Response> {

		localStorage.clear();
		return of(new Response());

	}

}
