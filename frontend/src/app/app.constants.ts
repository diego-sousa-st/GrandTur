export const sexo = {
	masculino: 'M',
	feminino: 'F'
};

export const perfis = {
	admin: 'ROLE_ADMIN',
	cliente: 'ROLE_CLIENTE'
};

export const nivelAcesso = [
	perfis.admin,
	perfis.cliente
]

export const routeParams = {
	tipo: {
		curso: 'curso',
		cliente: 'cliente',
		admin: 'admin'
	}
};

export const headersNames = {
	Authorization: 'Authorization',
};

export const userStore = 'user';

export const messages = {
	erroNaoIdentificado: 'Erro ocorrido no sistema, contate o administrador',
	saldoInsuficiente: 'Você não tem saldo para comprar este item. Por favor recarregue seus créditos na opção comprar crédito.',
	compraSucesso: 'Compra realizada com sucesso!',
	loginIncorreto: 'Falha ao efetuar login! Email ou senha incorretos',
	emailUsado: 'Erro ao criar conta! Este email já está sendo utilizado por outro usuário.'
};

export const BASE_API = 'http://localhost:8282/';

export const api = {

	FIND_USUARIO: BASE_API + 'usuarios/{cpf}',
	SAVE_USUARIO: BASE_API + 'usuarios',
	LOGIN: BASE_API + 'usuarios/login',
	COMPRAR_CREDITO: BASE_API + 'usuarios/comprarCredito/{cpfUsuario}/{valor}',
	COMPRAR_TICKET: BASE_API + 'usuarios/comprarTicket',
	FIND_10_ULTIMOS_PONTOS_CADASTRADOS: BASE_API + 'pontosTuristicos/10ultimosCadastrados/{cpfUsuario}',
	SAVE_PONTOS_TURISTICOS: BASE_API + 'pontosTuristicos',
	PESQUISA: BASE_API + 'pontosTuristicos/search/{termo}',
	DELETE_PONTO_TURISTICO: BASE_API + 'pontosTuristicos/delete/{id}',
	FIND_PONTO_TURISTICO: BASE_API + 'pontosTuristicos/{id}',
	FIND_PONTOS_TURISTICOS_VISITADOS: BASE_API + 'usuarios/pontosVisitados/{cpfUsuario}',
	FIND_BALANCO_FINANCEIRO_COMPLETO: BASE_API + 'balancoFinanceiro/completo',
	FIND_BALANCO_FINANCEIRO_ATUAL: BASE_API + 'balancoFinanceiro/atual'

};

export const Erro: any = {
	UNAUTHORIZED: 401,
	FORBIDDEN: 403
};

export const routePieces = {
	home: 'home',
	cadastro: {
		cliente: 'cadastro/cliente',
		admin: 'cadastro/admin/kkkbl23aindnfejpoiae11nmova23sdjofwflllaa26'
	},
	email: 'email',
	login: 'login/cliente',
	recursoAula: 'recursoAula',
	cadastroMaterial: 'cadastroMaterial',
	cadastroCurso: 'cadastroCurso',
	listagemPonto: {
		admin: 'listagemPonto/admin',
		cliente: 'listagemPonto/cliente'
	},
	perfil: 'perfil'

}

export const tipoModal = {
	confirmacaoExclusao: 'EXCLUSAO',
	confirmacaoCompra: 'COMPRA'
}