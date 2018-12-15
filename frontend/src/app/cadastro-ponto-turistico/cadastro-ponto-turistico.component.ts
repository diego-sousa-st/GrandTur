import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../shared/services/alert.service';
import { PontoTuristicoService } from '../shared/services/ponto-turistico.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { routeParams, tipoPonto } from '../app.constants';

@Component({
	selector: 'app-cadastro-ponto-turistico',
	templateUrl: './cadastro-ponto-turistico.component.pug',
	styleUrls: ['./cadastro-ponto-turistico.component.scss']
})
export class CadastroPontoTuristicoComponent implements OnInit {

	formulario: FormGroup;

	modoExibicao: any;

	subscriptions: Subscription[] = [];

	constructor(
		private formBuilder: FormBuilder,
		private alertService: AlertService,
		private pontoTuristicoService: PontoTuristicoService,
		private activatedRoute: ActivatedRoute
	) {

		this.initForm();
		this.listenToRoute();

	}

	ngOnInit() {
	}

	listenToRoute() {

		this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {

			let idPonto = parseInt(params.tipo);

			if(!isNaN(idPonto)) {

				this.modoExibicao = tipoPonto.edicao;
				this.pontoTuristicoService.find(params.tipo).subscribe(
					(pontoTuristico) => this.formulario.patchValue(pontoTuristico),
					(error) => this.alertService.showAlert('Erro ao buscar ponto turístico', 'error')
				);
				return;

			}

			this.modoExibicao = tipoPonto.cadastro;

		}));

	}

	initForm() {

		this.formulario = this.formBuilder.group({
			id: null,
			nome: [null, Validators.required],
			pais: [null, Validators.required],
			cidade: [null, Validators.required],
			complemento: [null, Validators.required],
			descricao: [null, Validators.required],
			valor: [null, [Validators.required, Validators.min(0)]],
			imagens: [null],
		});

	}

	cadastrarPontoTuristico() {

		this.pontoTuristicoService.salvar(this.formulario.value).subscribe(
			() => this.alertService.showAlert('Ponto turístico cadastrado com sucesso.', 'success'),
			() => this.alertService.showAlert('Erro ao cadastrar ponto turístico', 'error')
		);

	}

	modoIsCadastro() {

		this.modoExibicao === tipoPonto.cadastro;

	}

}
