import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ItemCursoComponent } from './item-curso/item-curso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecursoAulaComponent } from './recurso-aula/recurso-aula.component';
import { EmailComponent } from './email/email.component';
import { CadastroMaterialComponent } from './cadastro-material/cadastro-material.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { AprovacaoComponent } from './aprovacao/aprovacao.component';
import { ListagemCursoComponent } from './listagem-curso/listagem-curso.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpAuthResponseInterceptor } from './shared/security/interceptors/http-auth-response.interceptor';
import { HttpAuthRequestInterceptor } from './shared/security/interceptors/http-auth-request.interceptor';
import { AuthGuard } from './shared/security/guards/auth.guard';
import { PerfilAdminGuard } from './shared/security/guards/perfilAdmin.guard';
import { PerfilProfessorGuard } from './shared/security/guards/perfilProfessor.guard';
import { PerfilClienteGuard } from './shared/security/guards/perfilCliente.guard';
import { LoginGuard } from './shared/security/guards/login.guard';
import {NgxMaskModule} from 'ngx-mask'

@NgModule({
	declarations: [
		AppComponent,
		CadastroComponent,
		LoginComponent,
		RodapeComponent,
		ItemCursoComponent,
		PerfilComponent,
		RecursoAulaComponent,
		EmailComponent,
		CadastroMaterialComponent,
		CadastroCursoComponent,
		MenuPrincipalComponent,
		AprovacaoComponent,
		ListagemCursoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		HttpModule,
		ToastrModule.forRoot({ positionClass: 'toast-top-center', preventDuplicates: true }),
		NgxMaskModule.forRoot()
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpAuthResponseInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: HttpAuthRequestInterceptor, multi: true },
		AuthGuard,
		PerfilAdminGuard,
		PerfilProfessorGuard,
		PerfilClienteGuard,
		LoginGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
