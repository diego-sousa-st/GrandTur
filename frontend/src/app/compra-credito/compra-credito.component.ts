import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../shared/services/alert.service';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { messages } from '../app.constants';

@Component({
	selector: 'app-compra-credito',
	templateUrl: './compra-credito.component.pug',
	styleUrls: ['./compra-credito.component.scss']
})
export class CompraCreditoComponent implements OnInit {

	formulario: FormGroup;

	constructor(
		private usuarioService: UsuarioService,
		private formBuilder: FormBuilder,
		private alertService: AlertService,
		private redirectService: NavegacaoService
	) {

		this.loadForm();

	}

	ngOnInit() {
	}

	loadForm() {

		this.formulario = this.formBuilder.group({
			valor: [null, [Validators.required, Validators.min(1)]]
		});

	}

	comprar() {

		this.usuarioService.comprarCredito(this.formulario.get('valor').value).subscribe(
			(response) => {

				this.alertService.showAlert(messages.compraSucesso, 'success');
				this.redirectService.redirectToHome();

			},
			(error) => this.alertService.showAlert('Erro ao comprar créditos', 'error')
		);

	}

	cancelar() {

		this.redirectService.redirectToHome();

	}

}
