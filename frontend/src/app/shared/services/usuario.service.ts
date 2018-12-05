import { Injectable } from '@angular/core';
import { sexo, userStore } from 'src/app/app.constants';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	private usuario: any;

	constructor() {

		this.usuario = {
			nome: 'José dos testes',
			cpf: '12345678908',
			sexo: sexo.masculino,
			email: 'joseteste@gmail.com',
			senha: undefined
		};

	}

	getUsuario(): any {

		this.usuario.perfil = JSON.parse(localStorage.getItem(userStore)).roles[0].authority;

		return this.usuario;

	}

	setUsuario(usuario: any) {

		this.usuario = usuario;

	}
}
