import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-rodape',
	templateUrl: './rodape.component.pug',
	styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	getAno(): number {

		let today = new Date();
		return today.getFullYear();

	}

}
