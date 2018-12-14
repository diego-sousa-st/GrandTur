import { Injectable } from '@angular/core';
import { sexo, userStore } from 'src/app/app.constants';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	private usuario: any;

	constructor() {}

	getUsuario(): any {

		this.usuario = JSON.parse(localStorage.getItem(userStore));
		this.usuario.perfil = this.usuario.roles[0].authority;

		return this.usuario;

	}

	setUsuario(usuario: any) {

		this.usuario = usuario;

	}
}
