import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
import { CadastroService } from '../shared/services/cadastro.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '../shared/services/alert.service';
import { sexo } from '../app.constants';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.pug',
	styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

	private editing: boolean = false;
	private usuario: any;
	formulario: FormGroup;
	sexo: any = sexo;

	constructor(
		private usuarioService: UsuarioService,
		private cadastroService: CadastroService,
		private formBuilder: FormBuilder,
		private alertService: AlertService
	) {

		this.usuario = this.usuarioService.getUsuario();
		this.loadForm();

	}

	ngOnInit() {

		this.getUsuario();
	}

	loadForm() {

		this.formulario = this.formBuilder.group({
			id: null,
			nome: [null, [Validators.required, Validators.maxLength(45)]],
			cpf: [null, Validators.required],
			sexo: [null, Validators.required],
			email: [null, Validators.required],
			senhaAntiga: [null, [Validators.required, Validators.minLength(10)]],
			senha: [null, [Validators.required, Validators.minLength(10)]],
			senhaRedigitada: [null, [Validators.required, Validators.minLength(10)]],
		});
	}

	isEditing(): boolean {

		return this.editing;

	}

	setIsEditing(editing: boolean) {

		this.editing = editing;

	}

	getUsuario() {

		this.cadastroService.findUsuario().subscribe((response) => this.formulario.patchValue(response.valor[0]));

	}

	editarUsuario() {

		this.cadastroService.updateUsuario(this.formulario.value).subscribe(
			(response) => {

				if(response.status) {

					this.alertService.showAlert('Perfil alterado com sucesso', 'success');

				} else {

					this.alertService.showAlert(response.valor, 'error');

				}

			}
		);

	}

	// TODO talvez jogar em um service
	senhasConferem(): boolean {

		return this.formulario.get('senha').value === this.formulario.get('senhaRedigitada').value && this.formulario.get('senhaRedigitada').value &&
			this.formulario.get('senhaRedigitada').valid && this.formulario.get('senha').valid;


	}

}
