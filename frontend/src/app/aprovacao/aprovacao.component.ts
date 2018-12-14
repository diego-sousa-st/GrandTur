import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { routeParams } from '../app.constants';
import { AprovacaoService } from '../shared/services/aprovacao.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
	selector: 'app-aprovacao',
	templateUrl: './aprovacao.component.pug',
	styleUrls: ['./aprovacao.component.scss']
})
export class AprovacaoComponent implements OnInit {

	text = {
		professor: {
			title: 'Professores com aprovação pendente'
		},
		curso: {
			title: 'Cursos com aprovação pendente'
		}
	}

	subscriptions: Subscription[] = [];
	aprovacaoProfessor: boolean = false;

	professoresNaoAprovados: any[] = [];
	cursosNaoAprovados: any[] = [];
	textSelecionado: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private aprovacaoService: AprovacaoService,
		private alertService: AlertService
	) {

		this.listenToRoute();

	}

	ngOnInit() {
	}

	listenToRoute() {

		this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {

			if(params.tipo === routeParams.tipo.professor) {

				this.aprovacaoProfessor = true;
				this.textSelecionado = this.text.professor;
				this.findProfessoresNaoAprovados();
				return;

			}

			this.aprovacaoProfessor = false;
			this.textSelecionado = this.text.curso;
			this.findCursosNaoAprovados();

		}));

	}

	canLoad(): boolean {

		return true;

	}

	findProfessoresNaoAprovados() {

		this.aprovacaoService.findProfessoresNaoAprovados().subscribe(
			(response) => {

				if(response.status) {

					this.professoresNaoAprovados = response.valor;

				}

			}
		);

	}

	findCursosNaoAprovados() {

		this.aprovacaoService.findCursosNaoAprovados().subscribe(
			(response) => {

				if(response.status) {

					this.cursosNaoAprovados = response.valor;

				}

			}
		);

	}

	aprovacaoIsProfessor(): boolean {

		return this.aprovacaoProfessor;

	}

	aprovarProfessor(aprovar: boolean, professor: any) {

		this.aprovacaoService.aprovarProfessor(aprovar, professor).subscribe(
			(response) => {

				if(response.status) {

					this.alertService.showAlert('Ação feita com sucesso', 'success');
					this.findProfessoresNaoAprovados();

				} else {

					this.alertService.showAlert('Erro ao realizar ação', 'error');

				}

			}
		);

	}

	aprovarCurso(aprovar: boolean, curso) {

		this.aprovacaoService.aprovarCurso(aprovar, curso).subscribe(
			(response) => {

				if(response.status) {

					this.alertService.showAlert('Ação feita com sucesso', 'success');
					this.findCursosNaoAprovados();

				} else {

					this.alertService.showAlert('Erro ao realizar ação', 'error');

				}

			}
		);

	}

}
