import { Injectable } from '@angular/core';
import { sexo, userStore, api } from 'src/app/app.constants';
import { Observable, Subject } from 'rxjs';
import { HttpCustomizedService } from './http-customized.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	private usuario: any;

	private usuarioSubject = new Subject<any[]>();
	usuario$ = this.usuarioSubject.asObservable();

	constructor(private http: HttpCustomizedService) {}

	getUsuario(): any {

		this.usuario = JSON.parse(localStorage.getItem(userStore));
		this.usuario.perfil = this.usuario.roles[0].authority;

		return this.usuario;

	}

	setUsuario(usuario: any) {

		this.usuario = usuario;
		localStorage.setItem(userStore, JSON.stringify(usuario));

	}

	cadastrarUsuario(usuario: any): Observable<any> {

		const resource = api.SAVE_USUARIO;
		usuario.credito = 0;
		usuario.admin = false;

		return this.http.post(resource, usuario);

	}

	findUsuario(): Observable<any> {

		const resource = api.FIND_USUARIO.replace('{cpf}', this.usuario.cpf);
		return this.http.get(resource);

	}

	saveUsuario(usuario): Observable<any> {

		const resource = api.SAVE_USUARIO;
		return this.http.post(resource, usuario);

	}

	comprarCredito(valor: number): Observable<any> {

		const resource = api.COMPRAR_CREDITO.replace('{cpfUsuario}', this.usuario.cpf).replace('{valor}', valor.toString());

		return this.http.get(resource).pipe(
			map((response) => {

				this.usuario.credito = this.usuario.credito + valor;
				this.usuarioSubject.next(this.usuario);
				return response;

			})
		);

	}

}
