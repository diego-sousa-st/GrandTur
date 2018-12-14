import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { routeParams } from '../app.constants';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
	selector: 'app-listagem-curso',
	templateUrl: './listagem-curso.component.pug',
	styleUrls: ['./listagem-curso.component.scss']
})
export class ListagemCursoComponent implements OnInit {

	modoExibicao: any;
	subscriptions: Subscription[] = [];

	cursosCadastrados: any[] = [];
	cursosComprados: any[] = [];

	constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService) {

		this.listenToRoute();

	}

	ngOnInit() {
	}

	listenToRoute() {

		this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {

			if(params.tipo === routeParams.tipo.professor) {

				this.modoExibicao = routeParams.tipo.professor;
				this.findCursosCadastrados();
				return;

			}

			this.modoExibicao = routeParams.tipo.aluno;
			this.findCursosComprados();

		}));

	}

	canLoad(): boolean {

		return true;

	}

	findCursosCadastrados() {

		this.cursosCadastrados = [
			{
				nome: 'Teste 111111'
			},
			{
				nome: 'Teste 222222'
			},
			{
				nome: 'Teste 333333'
			},
			{
				nome: 'Teste 111111'
			},
			{
				nome: 'Teste 222222'
			},
			{
				nome: 'Teste 333333'
			},
		];
		// TODO bater no back pra buscar cursos cadastrados pelo professor, lembrar de passar o usuário

	}

	findCursosComprados() {

		this.cursosComprados = [
			{
				nome: 'Teste 55555'
			},
			{
				nome: 'Teste 6666666'
			},
			{
				nome: 'Teste 77777'
			},
		];
		// TODO bater no back pra buscar cursos comprados pelo aluno, lembrar de passar o usuário

	}

	modoExibicaoIsProfessor(): boolean {

		return this.modoExibicao === routeParams.tipo.professor;

	}

	modoExibicaoIsCliente(): boolean {

		return this.modoExibicao === routeParams.tipo.aluno;

	}

}
