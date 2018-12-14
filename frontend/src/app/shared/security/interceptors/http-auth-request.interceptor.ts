import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { headersNames } from '../../../app.constants';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpAuthRequestInterceptor implements HttpInterceptor {

	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const token = localStorage.getItem(headersNames.Authorization);

		if(token) {

			request = request.clone({
				setHeaders: {
					Authorization: token
				}
			});

		}

		return next
				.handle(request).pipe(map((event: HttpEvent<any>) => event))
				// .pipe(catchError((error: any) => throwError(error)));

	}

}
