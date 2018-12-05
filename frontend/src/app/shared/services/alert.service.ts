import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	constructor(private toastr: ToastrService) { }

	showAlert(message?: string, type?: string, title?: string) {

		this.toastr[type](message, title, { closeButton: true });

	}

	showAlertInterpolate( compiledMessageGenerator: (any) => string, paramsMap: any, type?: string, title?: string ) {

		this.showAlert(compiledMessageGenerator(paramsMap), type, title);

	}

	error(errorResponse: any) {

		this.showAlert(errorResponse.error.message, 'error');

	}

	printMessages(messages: string[], type ?: string, title ?: string) {

		messages.forEach(message => this.showAlert(message, type, title));

	}

}
