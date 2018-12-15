import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCustomizedService } from './http-customized.service';
import { api } from 'src/app/app.constants';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

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

	getListaPontosTuristicos() {

		return this.listaPontosTuristicos;

	}

	excluir(idPontoTuristico): Observable<any> {

		const resource = api.DELETE_PONTO_TURISTICO.replace('{id}', idPontoTuristico);

		return this.http.get(resource).pipe(
			map(() => {

				let indexToBeDeleted = _.findIndex(this.listaPontosTuristicos, (ponto) => ponto.id === idPontoTuristico);
				if(indexToBeDeleted !== -1) {

					this.listaPontosTuristicos.splice(indexToBeDeleted);

				}

			})
		);

	}

	comprar(compra: any) {

		const resource = api.COMPRAR_TICKET;

		return this.http.post(resource, compra);

	}

	salvar(pontoTuristico: any) {

		const resource = api.SAVE_PONTOS_TURISTICOS;

		return this.http.post(pontoTuristico, resource);


	}

	buscar10UltimosCadastrados(): Observable<any> {

		const resource = api.FIND_10_ULTIMOS_PONTOS_CADASTRADOS.replace('{cpfUsuario}', '0');
		return this.http.get(resource);

	}

}
