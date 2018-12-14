import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCustomizedService } from './http-customized.service';
import { api } from 'src/app/app.constants';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PontoTuristicoService {

	listaPontosTuristicos: any[] = [];

	constructor(private http: HttpCustomizedService) { }

	pesquisar(termo: string): Observable<any> {

		const resource = api.PESQUISA.replace('{termo}', termo);

		return this.http.get(resource).pipe(
			map((itens) => this.listaPontosTuristicos = itens)
		);

	}

}
