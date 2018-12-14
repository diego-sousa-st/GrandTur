import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { HttpCustomizedService } from '../../services/http-customized.service';
import { Observable, of } from 'rxjs';
import { api, userStore, headersNames, ACAO } from 'src/app/app.constants';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private httpCustomizedService: HttpCustomizedService) { }

	login(isAdmin: boolean, credentials: any): Observable<Response> {

		let acao = ACAO.LOGIN;

		if(isAdmin) {

			acao = ACAO.LOGIN_ADMIN;

		}

		credentials.acao = acao;

		// localStorage.setItem(headersNames.Authorization, 'tokenTeste');
		return this.httpCustomizedService.postWithTextResponse(api.AUTH, credentials);

	}

	logout(): Observable<Response> {

		return this.httpCustomizedService.postWithTextResponse(api.AUTH, {acao: ACAO.LOGOUT}).pipe(
			map((response) => {

				localStorage.clear();
				return response;

			})
		);

	}

}
