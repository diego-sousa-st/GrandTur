import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
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
			// sexo: [null, Validators.required],
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

		this.usuarioService.findUsuario().subscribe((response) => this.formulario.patchValue(response));

	}

	editarUsuario() {

		this.usuarioService.saveUsuario(this.formulario.value).subscribe(
			() => this.alertService.showAlert('Perfil alterado com sucesso', 'success'),
			() => this.alertService.showAlert('Erro ao tentar alterar perfil', 'error')
		);

	}

	// TODO talvez jogar em um service
	senhasConferem(): boolean {

		return this.formulario.get('senha').value === this.formulario.get('senhaRedigitada').value && this.formulario.get('senhaRedigitada').value &&
			this.formulario.get('senhaRedigitada').valid && this.formulario.get('senha').valid;


	}

}
