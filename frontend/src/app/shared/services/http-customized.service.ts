import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, empty, throwError } from 'rxjs';
import { AlertService } from './alert.service';
import { messages } from '../../app.constants';
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class HttpCustomizedService {

	response = {
		json: 'json' as 'json',
		text: 'text' as 'text',
		blob: 'blob' as 'blob',
		image: 'image/*' as 'image/*'
	};

	private static getResponseType(responseType: string): any {

		if(responseType === 'text') {

			return responseType as 'text';

		} else if(responseType === 'json') {

			return responseType as 'json';

		}

	}

	constructor(
		private http: HttpClient,
		private alertService: AlertService) {
	}

	appendHeaders(headers: HttpHeaders, name: string, value: string) {

		headers.append(name, value);

	}

	post(url: string, data: any, contentType?: string, responseType?: string): Observable<any> {

		const headers: HttpHeaders = new HttpHeaders();
		this.appendHeaders(headers, 'Content-Type', 'application/json');

		return this.catchExceptions(this.http.post(

			url,
			data,
			{headers: headers}

		));

	}

	requestDelete(url: string, contentType?: string, responseType?: string): Observable<any> {

		const headers: HttpHeaders = new HttpHeaders();
		this.appendHeaders(headers, 'Content-Type', 'application/json');

		return this.catchExceptions(this.http.delete(
			url,
			{headers: headers}
		));

	}

	postWithCustomConfig(url: string, data: any, contentType: string, responseType?: string): Observable<any> {

		const headers: HttpHeaders = new HttpHeaders();
		this.appendHeaders(headers, 'Content-Type', contentType);

		return this.http.post(

			url,
			data,
			{
				headers: headers,
				responseType: this.getResponseType(responseType) || this.getResponseType('json')

			}

		);

	}

	postWithTextResponse(url: string, data: any) {

		return this.postWithCustomConfig(url, data, 'application/json', 'text').pipe(map((response) => {

			if(typeof response === 'string') {

				try {

					return JSON.parse(response);

				} catch (error) {

					return {
						status: false,
						valor: 'Erro ao realizar operação'
					};

				}

			}

		}));

	}

	get(url: string, params?: HttpParams): Observable<any> {

		return this.catchExceptions(this.http.get(url, {params: params}));

	}

	private catchExceptions(obs: Observable<any>) {

		return obs.pipe(catchError((errorResponse) => {

			if (!!errorResponse.error) {

				this.alertService.showAlert(errorResponse.error.message, 'error');

				return empty();

			} else {

				this.alertService.showAlert(messages.erroNaoIdentificado, 'error');

				console.error(`Erro ocorrido: ${errorResponse}`);

				return throwError(errorResponse);
			}

		}));
	}

	getWithFullResponse(url: string, params?: HttpParams): Observable<any> {

		return this.http.get(url, {observe: 'response', params: params});

	}

	private getResponseType(responseType: string): any {

		return this.response[responseType];

	}

	postWithFullResponse(url: string, data: any, responseType?: string): Observable<any> {

		const headers: HttpHeaders = new HttpHeaders();
		this.appendHeaders(headers, 'Content-Type', 'application/json');

		return this.http.post(

			url,
			data,
			{
				headers: headers,
				observe: 'response',
				responseType: this.getResponseType(responseType) || this.getResponseType('json')
			}

		);

	}

	getWithCustomConfig(url: string, responseType?: string, observe?: any, contentType?: string): Observable<any> {

		const headers: HttpHeaders = new HttpHeaders();
		this.appendHeaders(headers, 'Content-Type', contentType || 'application/json');

		return this.http.get(

			url,
			{
				headers: headers,
				observe: observe || 'body',
				responseType: this.getResponseType(responseType) || this.getResponseType('json')

			}

		);

	}

	getResponseMessage(response: any): string {

		if(response.error) {

			const error = this.parseStringToJson(response.error);

			return error.message;

		}

		if(response._body) {

			const error = this.parseStringToJson(response._body);

			return error.message;

		}

		return response.message;

	}

	parseStringToJson(string: any): any {

		if(_.isEmpty(string)) {

			return {};

		}

		if(typeof string === 'string') {

			return JSON.parse(string);

		}

		return string;

	}

}
