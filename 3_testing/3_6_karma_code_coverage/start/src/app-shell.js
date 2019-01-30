import { TemplateRenderer } from './template-renderer.js';
import { sharedStyles } from './shared-styles.js';
import './profile-card.js';
import './profile-cards-animator.js';
import './profile-dialog.js';

export class AppShell extends TemplateRenderer {
	constructor() {
		super();

		this.people = [];
		this.noShadow = true;
		this.addEventListener('openDialog', e => this.querySelector('profile-dialog').open(e.detail));
	}

	connectedCallback() {
		super.connectedCallback();
		this.getPeople();
	}

	async getPeople() {
		const peoplePromise = await fetch('https://randomuser.me/api/?results=50');
		const res = await peoplePromise.json();
		this.setPeople(res.results);
	}

	setPeople(people) {
		this.people = people;
		this.render();
	}

	get template() {
		return `
      <style>
          :root{
              --primary: rgb(33, 150, 243);
          }

          app-shell {
              ${sharedStyles.trbl}
              overflow-y: overlay;
          }
      </style>

      <profile-dialog></profile-dialog>

      <profile-cards-animator>
			${
				!!this.people
					? this.people
							.map(
								profile =>
									`<profile-card profile-data=${encodeURIComponent(
										JSON.stringify(profile),
									)}></profile-card>`,
							)
							.join('')
					: ''
			} 
      </profile-cards-animator>
    `;
	}
}

customElements.define('app-shell', AppShell);
