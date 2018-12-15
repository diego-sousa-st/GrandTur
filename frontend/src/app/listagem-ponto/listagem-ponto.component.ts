import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { routeParams } from '../app.constants';
import { UsuarioService } from '../shared/services/usuario.service';
import { PontoTuristicoService } from '../shared/services/ponto-turistico.service';

@Component({
	selector: 'app-listagem-ponto',
	templateUrl: './listagem-ponto.component.pug',
	styleUrls: ['./listagem-ponto.component.scss']
})
export class ListagemPontoComponent implements OnInit {

	modoExibicao: any;
	subscriptions: Subscription[] = [];

	pontosTuristicos: any[] = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private pontoTuristicoService: PontoTuristicoService,
		private usuarioService: UsuarioService
	) {

		this.listenToRoute();

	}

	ngOnInit() {
	}

	listenToRoute() {

		this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {

			if(params.tipo === routeParams.tipo.admin) {

				this.modoExibicao = routeParams.tipo.admin;
				this.pontosTuristicos = this.pontoTuristicoService.getListaPontosTuristicos();
				return;

			}

			this.modoExibicao = routeParams.tipo.cliente;
			this.pontosTuristicos = this.pontoTuristicoService.getListaPontosTuristicos();

		}));

		this.subscriptions.push(this.activatedRoute.url.subscribe((url) => {

			if(url[0].path === 'home') {

				this.pontoTuristicoService.buscar10UltimosCadastrados().subscribe(
					(pontos) => {

						this.pontosTuristicos = pontos;

						if(this.usuarioService.getUsuario().admin) {

							this.modoExibicao = routeParams.tipo.admin;

						} else {

							this.modoExibicao = routeParams.tipo.cliente							;

						}

					}
				);

			}

		}));

	}

	canLoad(): boolean {

		return true;

	}

	modoExibicaoIsAdmin(): boolean {

		return this.modoExibicao === routeParams.tipo.admin;

	}

	modoExibicaoIsCliente(): boolean {

		return this.modoExibicao === routeParams.tipo.cliente;

	}

	haPontosTuristicos(): boolean {

		return this.pontosTuristicos.length !== 0;

	}

}
