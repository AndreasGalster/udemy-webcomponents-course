import { fixture, expect } from '@open-wc/testing';
import '../src/profile-card';

describe('<profile-card>', () => {
	it('has an empty default profileData prop', async () => {
		const el = await fixture('<profile-card></profile-card>');
		expect(el.profileData).to.deep.equal({});
	});
});
