import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { itemPontoComponent } from './item-ponto/item-ponto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecursoAulaComponent } from './recurso-aula/recurso-aula.component';
import { EmailComponent } from './email/email.component';
import { CadastroMaterialComponent } from './cadastro-material/cadastro-material.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ListagemPontoComponent } from './listagem-ponto/listagem-ponto.component';
import { AuthGuard } from './shared/security/guards/auth.guard';
import { LoginGuard } from './shared/security/guards/login.guard';
import { PerfilProfessorGuard } from './shared/security/guards/perfilProfessor.guard';
import { PerfilAdminGuard } from './shared/security/guards/perfilAdmin.guard';

// some routes are for debug

const appRoutes: Routes = [
	{ path: 'cadastro/:tipo', component: CadastroComponent, canActivate: [LoginGuard] },
	{ path: 'cadastro/:tipo/kkkbl23aindnfejpoiae11nmova23sdjofwflllaa26', component: CadastroComponent, canActivate: [LoginGuard] },
	{ path: 'home', component: ListagemPontoComponent, canActivate: [AuthGuard] }, // TODO ALTERAR
	{ path: 'login/:tipo', component: LoginComponent, canActivate: [LoginGuard]},
	{ path: 'login/:tipo/kkkbl23aindnfejpoiae11nmova23sdjofwflllaa26', component: LoginComponent, canActivate: [LoginGuard]},
	{ path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
	// { path: 'recursoAula', component: RecursoAulaComponent, canActivate: [AuthGuard] },
	// { path: 'email', component: EmailComponent, canActivate: [PerfilProfessorGuard] },
	{ path: 'cadastroMaterial', component: CadastroMaterialComponent, canActivate: [PerfilProfessorGuard] },
	{ path: 'listagemPonto/:tipo', component: ListagemPontoComponent, canActivate: [AuthGuard] },
	{ path: '',   redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: true}
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule{}
