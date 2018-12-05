import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { routeParams } from '../app.constants';

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

	constructor(private activatedRoute: ActivatedRoute) {

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

		this.professoresNaoAprovados = [
			{
				id: 1,
				nome: 'Joao dos testes lokos',
				cpf: '12345678904',
				sexo: 'M',
				email: 'blabalb@gmail.com'
			},
			{
				id: 2,
				nome: 'Joao dos testes lokos2',
				cpf: '12345678905',
				sexo: 'M',
				email: 'blabalb@gmail.com'
			},
			{
				id: 3,
				nome: 'Joao dos testes lokos3',
				cpf: '12345678906',
				sexo: 'M',
				email: 'blabalb@gmail.com'
			},
		];
		// TODO chamar back para buscar a lista de professores não aprovados

	}

	findCursosNaoAprovados() {

		this.cursosNaoAprovados = [
			{
				id: 1,
				nome: 'Curso loko1',
				valor: '500',
				descricao: 'Curso bom pra quem está começanco!'
			},
			{
				id: 2,
				nome: 'Curso loko1',
				valor: '500',
				descricao: 'Curso bom pra quem está começanco!'
			},
			{
				id: 3,
				nome: 'Curso loko3',
				valor: '500',
				descricao: 'Curso bom pra quem está começanco!'
			},
		];
		// TODO chamar back para buscar a lista de cursos não aprovados


	}

	aprovacaoIsProfessor(): boolean {

		return this.aprovacaoProfessor;

	}

	aprovarProfessor(aprovar: boolean, professor: any) {

		// TODO chamar back para aprovar o professor passado

	}

	aprovarCurso(aprovar: boolean) {

		// TODO chamar back para aprovar o curso passado

	}

}
