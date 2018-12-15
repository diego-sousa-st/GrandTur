import { Component, OnInit, Input } from '@angular/core';
import { routeParams, routePieces, tipoModal, messages } from '../app.constants';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { GenericModalService } from '../shared/modais/generic-modal/generic-modal.service';
import { Executavel } from '../shared/modais/generic-modal/executavel';
import { PontoTuristicoService } from '../shared/services/ponto-turistico.service';
import { AlertService } from '../shared/services/alert.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
	selector: 'app-item-ponto',
	templateUrl: './item-ponto.component.pug',
	styleUrls: ['./item-ponto.component.scss']
})
export class itemPontoComponent implements OnInit, Executavel {

	@Input() item: any;

	@Input() modoExibicao: any;

	tipoModal: any;

	valor: number;

	estaComprando: boolean = false;

	formulario: FormGroup;

	constructor(
		private redirectService: NavegacaoService,
		private genericModalService: GenericModalService,
		private pontoTuristicoService: PontoTuristicoService,
		private alertService: AlertService,
		private formBuilder: FormBuilder,
		private usuarioService: UsuarioService
	) { }

	ngOnInit() {

		this.loadForm();

	}

	loadForm() {

		this.formulario = this.formBuilder.group({
			qtdTickets: [null]
		});

	}

	getNome(): string {

		return this.item.nome;

	}

	getImageSource() {

		const imagens = [
			'https://blog.rangle.io/content/images/2016/11/rangleio-blog-first-time-using-scrum-to-build-software.gif',
			'https://abrilcasacor.files.wordpress.com/2018/06/07-pontos-turisticos-russia.jpg?quality=70&strip=info&w=919',
			'https://1.bp.blogspot.com/-B37DwlFEe-0/U3q8l6bKbvI/AAAAAAAAV2g/MhgnuYNgAgc/s1600/estatua-liberdade-new-york.jpg',
			'https://1.bp.blogspot.com/-uMn90ewU0Rs/VeSuNBT3lFI/AAAAAAAAl_Q/C5ZVGMct2kMkfREWEn2aU7oRG6hUN27ugCKgB/s1600/torre-de-pisa-italia.jpg',
			'https://media-cdn.tripadvisor.com/media/photo-s/0d/97/c5/8e/ponto-turistico-em-ita.jpg',
			'https://2.bp.blogspot.com/-IrBvJMCYVZ0/VIeeBZbOaTI/AAAAAAAAgdo/ZEho4bqWwm8/s1600/orlando-pontos-turisticos.jpg',
			'https://3.bp.blogspot.com/-k_yX2NkPez4/U2weYsrq_GI/AAAAAAAAVnI/nDchnlo8Fww/s1600/Stratosphere-Cassino-Ponto-Turistico.jpg'
		];

		let pos = Math.floor(Math.random() * 7);

		return imagens[pos];

	}

	modoExibicaoIsAdmin(): boolean {

		return this.modoExibicao === routeParams.tipo.admin;

	}

	modoExibicaoIsCliente(): boolean {

		return this.modoExibicao === routeParams.tipo.cliente;

	}

	visualizar() {

		// this.redirectService.goTo(routePieces.pontoTuristico);

	}

	comprar() {

		this.estaComprando = true;

	}

	openModalConfirmacaoCompra() {

		this.valor = this.item.valor * this.formulario.get('qtdTickets').value;
		this.tipoModal = tipoModal.confirmacaoCompra;
		this.genericModalService.open(
			'Confirmar compra',
			'Sua compra está sendo processada. O valor é R$' + this.valor +
			',00. Clique em finalizar para concluir sua compra.',
			'Cancelar',
			'Finalizar',
			this
		);

	}

	editarPontoTuristico() {

		this.redirectService.goTo('pontoTuristico/' + this.item.id);

	}

	openModalConfirmacaoExclusao() {

		this.tipoModal = tipoModal.confirmacaoExclusao;
		this.genericModalService.open(
			'Confirmar exclusão',
			'Tem certeza que deseja excluir o ponto turístico selecionado? Esta ação não poderá ser desfeita.',
			'Cancelar',
			'Excluir',
			this
		);

	}

	executeAction() {

		if(this.tipoModal === tipoModal.confirmacaoExclusao) {

			this.pontoTuristicoService.excluir(this.item.id).subscribe(
				() => this.alertService.showAlert('Ponto turístico deletado com sucesso', 'success'),
				() => this.alertService.showAlert('Erro ao tentar deletar ponto turístico', 'error'),
			);

		} else {


			if(this.valor > this.usuarioService.getUsuario().credito) {

				this.alertService.showAlert(messages.saldoInsuficiente, 'error');
				return;

			}

			let compra = this.createCompra();

			this.pontoTuristicoService.comprar(compra).subscribe(
				() => {

					this.alertService.showAlert(messages.compraSucesso, 'success')

				},
				() => this.alertService.showAlert('Erro ao efetuar compra', 'error'),
			);

			this.estaComprando = false;

		}

	}

	createCompra(): any {

		return {
			usuario: this.usuarioService.getUsuario(),
			pontoTuristico: this.item,
			valor: this.valor
		};

	}

	isComprando(): boolean {

		return this.estaComprando;

	}

}
