import { html, fixture, expect } from '@open-wc/testing';
import { chai } from '@bundled-es-modules/chai'; // eslint-disable-line
import { chaiDomEquals } from '@open-wc/chai-dom-equals'; // eslint-disable-line

import '../src/profile-card';
import { profileCardData } from './_mocks';

chai.use(chaiDomEquals);

describe('<profile-card>', () => {
	it('has a empty default profileData prop', async () => {
		const el = await fixture('<profile-card></profile-card>');
		expect(el.profileData).to.deep.equal({});
	});

	it('does not render content with the default profileData prop', async () => {
		const el = await fixture('<profile-card></profile-card>');
		expect(el).shadowDom.to.equal('');
	});

	it('does render content with data fed into the profileData prop', async () => {
		const el = await fixture(
			html`
				<profile-card .profileData=${profileCardData}></profile-card>
			`,
		);

		expect(el).shadowDom.to.equal(`
			<img src="https://randomuser.me/api/portraits/thumb/women/67.jpg">
			<h1>
			  ines
			</h1>		
		`);
	});

	// it('does not have an attribute set when feeding data via attribute', async () => {
	// 	const el = await fixture(
	// 		html`
	// 			<profile-card
	// 				profile-data=${encodeURIComponent(JSON.stringify(profileCardData))}
	// 			></profile-card>
	// 		`,
	// 	);

	// 	expect(el.hasAttribute('profile-data')).to.equal(false);
	// });
});
