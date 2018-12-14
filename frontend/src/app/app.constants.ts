export const sexo = {
	masculino: 'M',
	feminino: 'F'
};

export const perfis = {
	admin: 'ROLE_ADMIN',
	professor: 'ROLE_PROFESSOR',
	aluno: 'ROLE_ALUNO'
};

export const nivelAcesso = [
	perfis.admin,
	perfis.professor,
	perfis.aluno
]

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

export const BASE_API = 'http://localhost:8000/';

export const api = {
	// TODO inserir as urls aqui do backend
	FIND_USUARIO: 'URL',
	FIND_USUARIO_AUTHENTICADO: 'URL',
	LOGIN: 'URL',
	LOGOUT: 'URL',
	ADMINISTRADOR: BASE_API + 'VipClass/backend/api/administrador.php',
	PROFESSOR: BASE_API + 'VipClass/backend/api/professor.php',
	ALUNO: BASE_API + 'VipClass/backend/api/aluno.php',
	CURSO: BASE_API + 'VipClass/backend/api/curso.php',
	AUTH: BASE_API + 'VipClass/backend/api/autenticacao.php'
};

export const Erro: any = {
	UNAUTHORIZED: 401,
	FORBIDDEN: 403
};

export const routePieces = {
	home: 'home',
	cadastro: {
		aluno: 'cadastro/aluno',
		professor: 'cadastro/professor',
		admin: 'cadastro/admin/kkkbl23aindnfejpoiae11nmova23sdjofwflllaa26'
	},
	email: 'email',
	login: 'login/cliente',
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

export const ACAO = {
	INSERT_UPDATE: 'insert',
	UPDATE: 'update',
	GET: 'get',
	DELETE: 'delete',
	APROVAR_PROFESSOR: 'aprovarProfessor',
	REPROVAR_PROFESSOR: 'desaprovarProfessor',
	APROVAR_CURSO: 'aprovarCurso',
	REPROVAR_CURSO: 'desaprovarCurso',
	LOGIN: 'login',
	LOGIN_ADMIN: 'loginAdm',
	USUARIO_ESTA_LOGADO: 'usuarioLogado',
	USUARIO_PODE_LOGAR: 'usuarioPodeLogar',
	LOGOUT: 'logout'

}