import { Injectable } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { GenericModalComponent } from './generic-modal.component';
import { Executavel } from './executavel';

@Injectable({
	providedIn: 'root'
})
export class GenericModalService {

	constructor(private modalService: BsModalService) { }

	open(titulo: string, conteudo: string, textoBotaoCancelar: string, textoBotaoConfirmar: string, component: Executavel): BsModalRef {

		const modalRef = this.modalService.show(GenericModalComponent);

		if(!modalRef) {

			return null;

		}

		modalRef.content.setTitulo(titulo);

		modalRef.content.setConteudo(conteudo);

		modalRef.content.setTextoBotaoCancelar(textoBotaoCancelar);

		modalRef.content.setTextoBotaoConfirmar(textoBotaoConfirmar);

		modalRef.content.setExecutavel(component);

		return modalRef;

	}

}
