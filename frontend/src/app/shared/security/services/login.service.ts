import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { HttpCustomizedService } from '../../services/http-customized.service';
import { Observable, of } from 'rxjs';
import { api, userStore, headersNames } from 'src/app/app.constants';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private httpCustomizedService: HttpCustomizedService) { }

	login(credentials): Observable<Response> {

		// const parameters = new HttpParams({

		// 	fromString: 'username=' + credentials.username.replace(/[.-]/g, '') + '&password=' + credentials.password

		// });

		// return this.httpCustomizedService.postWithCustomConfig(api.LOGIN, parameters, 'application/x-www-form-urlencoded', 'text');

		localStorage.setItem(headersNames.Authorization, 'tokenTeste');
		// localStorage.setItem(userStore, credentials);
		// return of(new Response());

		// return this.httpCustomizedService.get('http://localhost:8000/phppuro.php');
		return this.httpCustomizedService.post('http://localhost:8000/phppuro.php', credentials);

	}

	logout(): Observable<Response> {

		// return this.httpCustomizedService.get(api.LOGOUT);
		localStorage.clear();
		return of(new Response());

	}

}
