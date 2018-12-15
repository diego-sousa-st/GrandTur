import { Component, OnInit } from '@angular/core';
import { BalancoFinanceiroService } from '../shared/services/balanco-financeiro.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
	selector: 'app-balanco-financeiro',
	templateUrl: './balanco-financeiro.component.pug',
	styleUrls: ['./balanco-financeiro.component.scss']
})
export class BalancoFinanceiroComponent implements OnInit {

	balanco: any;

	constructor(
		private balancoFinanceiroService: BalancoFinanceiroService,
		private alertService: AlertService
	) {

		this.balancoFinanceiroService.getBalancoFinanceiroCompleto().subscribe(
			(balanco) => this.balanco = balanco,
			(error) => this.alertService.showAlert('Erro ao calcular balanço financeiro')
		);

	}

	ngOnInit() {
	}

}
