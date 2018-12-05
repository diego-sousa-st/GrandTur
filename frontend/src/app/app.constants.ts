export const sexo = {
	masculino: 'M',
	feminino: 'F'
};

export const perfis = {
	admin: 'ROLE_ADMIN',
	professor: 'ROLE_PROFESSOR',
	aluno: 'ROLE_ALUNO'
};

export const routeParams = {
	tipo: {
		professor: 'professor',
		curso: 'curso',
		aluno: 'aluno',
		admin: 'admin'
	}
};

export const headersNames = {
	Authorization: 'Authorization',
};

export const userStore = 'user';

export const messages = {
	erroNaoIdentificado: 'Erro ocorrido no sistema, contate o administrador',
	loginSucesso: 'Login efetuado com sucesso!'
};

export const api = {
	// TODO inserir as urls aqui do backend
	FIND_USUARIO: 'URL',
	FIND_USUARIO_AUTHENTICADO: 'URL',
	LOGIN: 'URL',
	LOGOUT: 'URL'
};

export const Erro: any = {
	UNAUTHORIZED: 401,
	FORBIDDEN: 403
};

export const routePieces = {
	home: 'home',
	cadastro: {
		aluno: 'cadastro/aluno',
		professor: 'cadastro/professor'
	},
	email: 'email',
	login: 'login',
	recursoAula: 'recursoAula',
	cadastroMaterial: 'cadastroMaterial',
	cadastroCurso: 'cadastroCurso',
	aprovacao: {
		curso: 'aprovacao/curso',
		professor: 'aprovacao/professor'
	},
	listagemCurso: {
		professor: 'listagemCurso/professor',
		aluno: 'listagemCurso/aluno'
	},
	perfil: 'perfil'

}