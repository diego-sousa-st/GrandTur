import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpCustomizedService } from './http-customized.service';
import { api } from 'src/app/app.constants';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { UsuarioService } from './usuario.service';

@Injectable({
	providedIn: 'root'
})
export class PontoTuristicoService {

	listaPontosTuristicos: any[] = [];

	private usuario = new Subject<any[]>();
	usuario$ = this.usuario.asObservable();

	constructor(private http: HttpCustomizedService, private usuarioService: UsuarioService) { }

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

		return this.http.post(resource, compra).pipe(
			map(() => {

				let usuario = this.usuarioService.getUsuario();
				usuario.credito = usuario.credito - compra.valor;
				this.usuarioService.setUsuario(usuario);

				this.usuario.next(usuario);

			})
		);

	}

	salvar(pontoTuristico: any) {

		const resource = api.SAVE_PONTOS_TURISTICOS;

		pontoTuristico.usuario = this.usuarioService.getUsuario();
		pontoTuristico.ativo = true;
		pontoTuristico.imagens = [];

		return this.http.post(resource, pontoTuristico);


	}

	buscar10UltimosCadastrados(): Observable<any> {

		const resource = api.FIND_10_ULTIMOS_PONTOS_CADASTRADOS.replace('{cpfUsuario}', '0');
		return this.http.get(resource).pipe(
			map((pontos) => this.listaPontosTuristicos = pontos)
		);

	}

	find(idPonto): Observable<any> {

		const resource = api.FIND_PONTO_TURISTICO.replace('{id}', idPonto);

		return this.http.get(resource);


	}

}
