import { Injectable } from '@angular/core';
import { HttpCustomizedService } from './http-customized.service';
import { api } from 'src/app/app.constants';

@Injectable({
	providedIn: 'root'
})
export class BalancoFinanceiroService {

	constructor(private http: HttpCustomizedService) { }

	getBalancoFinanceiroCompleto() {

		const resource = api.FIND_BALANCO_FINANCEIRO_COMPLETO;

		return this.http.get(resource);

	}

}
