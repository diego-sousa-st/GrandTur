import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

import { Erro, headersNames } from '../../../app.constants';
import { AlertService } from '../../services/alert.service';

import { Observable, throwError } from 'rxjs';
import { NavegacaoService } from '../../services/navegacao.service';
import { map, catchError } from 'rxjs/operators';
import { HttpCustomizedService } from '../../services/http-customized.service';

@Injectable()
export class HttpAuthResponseInterceptor implements HttpInterceptor {

	constructor(
		private redirectService: NavegacaoService,
		private alertService: AlertService,
		private httpCustomizedService: HttpCustomizedService
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		return next
				.handle(request).pipe(
				map((event: HttpEvent<any>) => {

					if(event instanceof HttpResponse) {

						this.setToken(event);

					}

					return event;

				}))
				.pipe(catchError((error: any) => {

					this.setToken(error);
					this.errorHandler(error);

					return throwError(new Error(error.message));

				}));

	}

	setToken(event: any) {

		const header = event.headers;
		const token = header.get(headersNames.Authorization);

		if(token) {

			localStorage.setItem(headersNames.Authorization, token);

		}

	}

	errorHandler(request) {

		if(request.status === Erro.UNAUTHORIZED) {

			this.alertService.showAlert(this.httpCustomizedService.getResponseMessage(request), 'error');

			this.redirectService.redirectUnauthenticated();

		} else if(request.status === Erro.FORBIDDEN) {

			this.alertService.showAlert(request.message, 'error');

		}

	}

}
