import { Injectable } from '@angular/core';
import { HttpCustomizedService } from './http-customized.service';
import { api, ACAO } from 'src/app/app.constants';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
	providedIn: 'root'
})
export class AprovacaoService {

	constructor(
		private http: HttpCustomizedService,
		private usuarioService: UsuarioService
	) { }

	findProfessoresNaoAprovados(): Observable<any> {

		const data = {
			acao: ACAO.GET,
			naoAprovados: true
		}

		return this.http.postWithTextResponse(api.PROFESSOR, data);

	}

	findCursosNaoAprovados() {

		const data = {
			acao: ACAO.GET,
			naoAprovados: true
		}

		return this.http.postWithTextResponse(api.CURSO, data);

	}

	aprovarProfessor(aprovar: boolean, professor: any): Observable<any> {

		let acao;

		if(aprovar) {

			acao = ACAO.APROVAR_PROFESSOR;

		} else {

			acao = ACAO.REPROVAR_PROFESSOR

		}

		const data = {
			acao: acao,
			administradorId: this.usuarioService.getUsuario().id,
			professorId: professor.id
		}

		return this.http.postWithTextResponse(api.ADMINISTRADOR, data);

	}

	aprovarCurso(aprovar: boolean, curso: any) {

		let acao;

		if(aprovar) {

			acao = ACAO.APROVAR_CURSO;

		} else {

			acao = ACAO.REPROVAR_CURSO

		}

		const data = {
			acao: acao,
			cursoId: curso.id
		}

		return this.http.postWithTextResponse(api.ADMINISTRADOR, data);

	}

}
