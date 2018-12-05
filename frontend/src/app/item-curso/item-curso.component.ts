import { Component, OnInit, Input } from '@angular/core';
import { routeParams, routePieces } from '../app.constants';
import { NavegacaoService } from '../shared/services/navegacao.service';

@Component({
	selector: 'app-item-curso',
	templateUrl: './item-curso.component.pug',
	styleUrls: ['./item-curso.component.scss']
})
export class ItemCursoComponent implements OnInit {

	@Input() item: any = {
		nome: 'Desenvolvimento ágil com scrum'
	};

	@Input() modoExibicao: any;

	constructor(private redirectService: NavegacaoService) { }

	ngOnInit() {
	}

	getNome(): string {

		return this.item.nome;

	}

	getImageSource() {

		return 'https://blog.rangle.io/content/images/2016/11/rangleio-blog-first-time-using-scrum-to-build-software.gif';

	}

	modoExibicaoIsProfessor(): boolean {

		return this.modoExibicao === routeParams.tipo.professor;

	}

	modoExibicaoIsCliente(): boolean {

		return this.modoExibicao === routeParams.tipo.aluno;

	}

	visualizar() {

		this.redirectService.goTo(routePieces.recursoAula);

	}

	comprar() {

		// TODO chamar modal para confirmar compra

	}

	cadastrarMaterial() {

		this.redirectService.goTo(routePieces.cadastroMaterial);

	}

	enviarEmail() {

		this.redirectService.goTo(routePieces.email);

	}

}
