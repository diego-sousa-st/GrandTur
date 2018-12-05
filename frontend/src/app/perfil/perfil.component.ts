import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.pug',
	styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

	private editing: boolean = false;
	private usuario: any;

	constructor(private usuarioService: UsuarioService) {

		this.usuario = this.usuarioService.getUsuario();

	}

	ngOnInit() {
	}

	isEditing(): boolean {

		return this.editing;

	}

	setIsEditing(editing: boolean) {

		this.editing = editing;

	}

}
