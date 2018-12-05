import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class NavegacaoService {

	constructor(private routerService: Router, private locationService: Location) { }

	goTo(path: string) {

		this.routerService.navigate([path]);

	}

	redirectToLogin() {

		this.routerService.navigate(['login']);

	}

	redirectToHome() {

		this.routerService.navigate(['home']);

	}

	back() {

		this.locationService.back();

	}

	redirectUnauthenticated() {

		localStorage.clear();

		this.redirectToLogin();


	}
}
