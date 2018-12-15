import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { itemPontoComponent } from './item-ponto/item-ponto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecursoAulaComponent } from './recurso-aula/recurso-aula.component';
import { EmailComponent } from './email/email.component';
import { CadastroPontoTuristicoComponent } from './cadastro-ponto-turistico/cadastro-ponto-turistico.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ListagemPontoComponent } from './listagem-ponto/listagem-ponto.component';
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
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { GenericModalComponent } from './shared/modais/generic-modal/generic-modal.component';
import { CompraCreditoComponent } from './compra-credito/compra-credito.component';
import { BalancoFinanceiroComponent } from './balanco-financeiro/balanco-financeiro.component';

@NgModule({
	declarations: [
		AppComponent,
		CadastroComponent,
		LoginComponent,
		RodapeComponent,
		itemPontoComponent,
		PerfilComponent,
		RecursoAulaComponent,
		EmailComponent,
		CadastroPontoTuristicoComponent,
		MenuPrincipalComponent,
		ListagemPontoComponent,
		GenericModalComponent,
		CompraCreditoComponent,
		BalancoFinanceiroComponent
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
		NgxMaskModule.forRoot(),
		ModalModule.forRoot()
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpAuthResponseInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: HttpAuthRequestInterceptor, multi: true },
		AuthGuard,
		PerfilAdminGuard,
		PerfilProfessorGuard,
		PerfilClienteGuard,
		LoginGuard,
		BsModalService
	],
	entryComponents: [
		GenericModalComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
