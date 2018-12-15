import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Executavel } from './executavel';

@Component({
	selector: 'app-generic-modal',
	templateUrl: './generic-modal.component.pug',
	styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {

	titulo: string;
	conteudo: string;
	textoBotaoCancelar: string;
	textoBotaoConfirmar: string;
	component: Executavel;

	constructor(public activeModal: BsModalRef) { }

	ngOnInit() {
	}

	setTitulo(titulo: string) {

		this.titulo = titulo;

	}

	setConteudo(conteudo: string) {

		this.conteudo = conteudo;

	}

	setTextoBotaoCancelar(textoBotaoCancelar: string) {

		this.textoBotaoCancelar = textoBotaoCancelar;

	}

	setTextoBotaoConfirmar(textoBotaoConfirmar: string) {

		this.textoBotaoConfirmar = textoBotaoConfirmar;

	}

	setExecutavel(component: Executavel) {

		this.component = component;

	}

	executar() {

		this.component.executeAction();
		this.activeModal.hide();

	}

	cancelar() {

		this.activeModal.hide();

	}

}
