import { aTimeout, nextFrame, html, fixture, expect } from '@open-wc/testing';
import { chai } from '@bundled-es-modules/chai'; // eslint-disable-line
import { chaiDomEquals } from '@open-wc/chai-dom-equals'; // eslint-disable-line

import '../src/app-shell';
import { profileCardData, people } from './_mocks';

chai.use(chaiDomEquals);

describe('<app-shell>', () => {
	it('has a empty default people prop', async () => {
		const el = await fixture('<app-shell></app-shell>');
		expect(el.people).to.deep.equal([]);
	});

	it('sets people prop and renders cards', async () => {
		const el = await fixture('<app-shell></app-shell>');
		el.setPeople(people);
		expect(el.people).to.deep.equal(people);
		expect(el).dom.to.equal(`
		<app-shell>
		  <profile-dialog>
		  </profile-dialog>
		  <profile-cards-animator>
		    <profile-card>
		    </profile-card>
		    <profile-card>
		    </profile-card>
		    <profile-card>
		    </profile-card>
		  </profile-cards-animator>
		</app-shell>
		`);
	});

	it('should open the dialog on click of a card', async () => {
		const el = await fixture('<app-shell></app-shell>');

		el.setPeople(people);

		document.querySelector('profile-card').click();
		expect(el).dom.to.equal(`
		<app-shell>
		  <profile-dialog opened>
		  </profile-dialog>
		  <profile-cards-animator>
		    <profile-card>
		    </profile-card>
		    <profile-card>
		    </profile-card>
		    <profile-card>
		    </profile-card>
		  </profile-cards-animator>
		</app-shell>
		`);
	});
});
