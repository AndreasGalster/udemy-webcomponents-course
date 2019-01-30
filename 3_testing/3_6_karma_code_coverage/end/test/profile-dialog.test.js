import { html, fixture, expect } from '@open-wc/testing';
import { chai } from '@bundled-es-modules/chai'; // eslint-disable-line
import { chaiDomEquals } from '@open-wc/chai-dom-equals'; // eslint-disable-line

import '../src/profile-dialog';
import { profileCardData } from './_mocks';

chai.use(chaiDomEquals);

describe('<profile-dialog>', () => {
	it('has a empty default profileData prop', async () => {
		const el = await fixture('<profile-dialog></profile-dialog>');
		expect(el.profileData).to.deep.equal({});
	});

	it('has opened set to false by default', async () => {
		const el = await fixture('<profile-dialog></profile-dialog>');
		expect(el.opened).to.equal(false);
	});

	it('should open and have opened set to true', async () => {
		const el = await fixture('<profile-dialog></profile-dialog>');
		el.open();
		expect(el.opened).to.equal(true);
		expect(el.hasAttribute('opened')).to.equal(true);
	});

	it('should close and have opened set to false', async () => {
		const el = await fixture('<profile-dialog></profile-dialog>');
		el.open();
		el.close();
		expect(el.opened).to.equal(false);
		expect(el.hasAttribute('opened')).to.equal(false);
	});

	it('should open without data fed in and contain no content', async () => {
		const el = await fixture('<profile-dialog></profile-dialog>');
		el.open();
		expect(el).shadowDom.to.equal(`<dialog open></dialog>`);
	});

	it('should open with data fed in and contain content', async () => {
		const el = await fixture('<profile-dialog></profile-dialog>');
		el.open(profileCardData);
		expect(el).shadowDom.to.equal(`
			<dialog open>
			<img src="https://randomuser.me/api/portraits/thumb/women/67.jpg">
			<h1>
				ines skjeggestad
			</h1>
			<section>
				<div>
				<img class="icon"
					src="https://www.materialui.co/materialIcons/hardware/smartphone_black_96x96.png"
				>
				<p>
					98464125
				</p>
				</div>
				<div>
				<img class="icon"
					src="https://www.materialui.co/materialIcons/communication/email_black_96x96.png"
				>
				<p>
					ines.skjeggestad@example.com
				</p>
				</div>
			</section>
			<p>
				Proin finibus lectus vitae accumsan lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas volutpat aliquet sapien sit amet faucibus. Donec id velit sit amet felis pharetra tincidunt. Proin vitae nibh a massa commodo blandit. Sed quam lorem, molestie ac nisi in, blandit interdum tortor. Nunc interdum id quam nec vestibulum.
			</p>
			</dialog>
		`);
	});
});
