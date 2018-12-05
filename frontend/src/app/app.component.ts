import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/security/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'GrandTur';

	subscriptions: Subscription[] = [];
	isAuthenticated: boolean;

	constructor(private authService: AuthService) {}

	ngOnInit() {

		this.subscriptions.push(this.authService.authenticated$
			.subscribe(isAuthenticated => {

				this.isAuthenticated = isAuthenticated

			})
		);

		this.authService.isAuthenticatedSubject();

	}

	ngOnDestroy(): void {

		this.subscriptions.forEach(element => element.unsubscribe());

	}

}
